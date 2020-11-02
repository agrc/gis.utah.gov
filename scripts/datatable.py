#!/usr/bin/env python
# * coding: utf8 *
'''
datatable.py

A module that reads the stewardship spreadsheet and builds the sgid index page
'''

from collections import OrderedDict
from os import rename
from os.path import dirname, join

import pygsheets
#: from pydash.strings import start_case


def munge_data(item, i, indices):
    names = item[indices['layer']].split('.')
    if len(names) == 1:
        category = None
        name = names[0]
    elif len(names) == 2:
        category = names[0].lower()
        name = names[1]
    elif len(names) == 3:
        category = names[0].lower()
        name = '.'.join([names[1], names[2]])

    def utf8_encode(value):
        if value is None:
            return ''

        return value

    def should_link(value):
        if value is None or len(value) == 0:
            return ''

        url = item[indices['url']]
        if url is None or len(url) == 0 or url == 'N/A':
            return utf8_encode(value)

        if url.lower().startswith('http') or url.lower().startswith('ftp'):
            return f'<a href="{url}">{utf8_encode(value)}</a>'


        anchor_tag = item[indices['anchor']]

        if anchor_tag is None or len(anchor_tag) == 0:
            return f'<a href="{{% link {url} %}}">{utf8_encode(value)}</a>'

        return f'<a href="{{% link {url} %}}#{anchor_tag}">{utf8_encode(value)}</a>'

    def endpoint_link(value):
        if value is None or len(value) == 0:
            return ''

        if ',' in value:
            value = value.split(',')

            return ''.join([f'<a href="{v}" class="pull-right"><i class="fab fa-mixcloud fa-fw" alt="service endpoint"></i></a>' for v in value])

        return f'<a href="{value}" class="pull-right"><i class="fab fa-mixcloud fa-fw" alt="service endpoint"></i></a>'

    def webapp_link(value):
        if value is None or len(value) == 0:
            return ''

        if ',' in value:
            value = value.split(',')

            return ''.join([f'<a href="{v.strip()}" class="pull-right"><i class="fas fa-globe fa-fw" alt="website link"></i></a>' for v in value])

        return f'<a href="{value.strip()}" class="pull-right"><i class="fas fa-globe fa-fw" alt="website link"></i></a>'

    def booleanize(value):
        if value is None or len(value) == 0:
            return False

        return True


    return OrderedDict([
        ('category', utf8_encode(category)),
        ('name', should_link(start_case(name.replace('_', ' ')))),
        ('deprecated', booleanize(item[indices['deprecated']])),
        ('agency', utf8_encode(item[indices['data_source']])),
        ('description', utf8_encode(item[indices['description']])),
        ('service', ''.join([endpoint_link(item[indices['endpoint']]), webapp_link(item[indices['web_app']])
        ]))
    ])


def get_sheet_data(gc, sheet_id, worksheet_id):
    worksheet = gc.open_by_key(sheet_id).worksheet_by_title(worksheet_id)
    data = worksheet.get_all_values(returnas='matrix')

    header = data.pop(0)
    indices = {
        'layer': header.index('SGID Data Layer'),
        'description': header.index('Description'),
        'data_source': header.index('Data Source'),
        'url': header.index('Website URL'),
        'anchor': header.index('Anchor'),
        'data_type': header.index('Data Type'),
        'endpoint': header.index('Endpoint'),
        'web_app': header.index('Webapp'),
        'deprecated': header.index('Deprecated')
    }

    return [munge_data(item, i, indices) for i, item in enumerate(data)]


def create(data):
    categories = list(set([x['category'] for x in data]))
    categories.sort()
    html = '''---
title: SGID Index
---
<h6 id='show_filters' class='pointer'><i class="fas fa-search"></i> Show Filters</h6>
<div id='filters' class='hidden'>{}</div>
<div class="muted text-center">Simple Filter (matches text in individual columns with <a href='https://github.com/javve/list.js'>list.js</a>)</div>
<div id='table' class='datatable'>
    <input class="search" placeholder="Search SGID Index" />
    <table>
    '''.format(' | '.join(['<a id="filter_{0}" class="filter-item">{0}</a>'.format(x) for x in categories if len(x) > 0]))

    once = True
    for item in data:
        if item['deprecated']:
            continue

        if once:
            html += '''        <thead>
            <tr>
{}
            </tr>
        </thead>
        <tbody class='list'>'''.format('\n'.join(
                ['                <th scope="col"><span class="sort" data-sort="{0}">{0}</span></th>'.format(key) for key in item.keys() if key != 'deprecated']))
            once = False
        html += '''
            <tr>
{}
            </tr>'''.format('\n'.join(['                <td data-th="{0}" class="{0}">{1}</td>'.format(key, value) for key, value in item.items() if key != 'deprecated']))
    html += '''
        </tbody>
    </table>
</div>
<script src="{% link js/dist/list.min.js %}"></script>
'''

    return html

UPPER = "[A-Z\\xC0-\\xD6\\xD8-\\xDE]"
LOWER = "[a-z\\xDf-\\xF6\\xF8-\\xFF]+"
RE_WORDS = "/{upper}+(?={upper}{lower})|{upper}?{lower}|{upper}+|[0-9]+/g".format(
    upper=UPPER, lower=LOWER
)

def capitalize(text, strict=True):
    return text.capitalize() if strict else text[:1].upper() + text[1:]


def start_case(text):
   return  " ".join(capitalize(word, strict=False) for word in words(text))

def words(text, pattern=None):
    reg_exp_js_match(text, pattern or RE_WORDS)

def reg_exp_js_match(text, reg_exp):
    return js_to_py_re_find(reg_exp)(text)

def js_to_py_re_find(reg_exp):
    """Return Python regular expression matching function based on Javascript style regexp."""
    pattern, options = reg_exp[1:].rsplit("/", 1)
    flags = re.I if "i" in options else 0

    def find(text):
        if "g" in options:
            results = re.findall(pattern, text, flags=flags)
        else:
            results = re.search(pattern, text, flags=flags)

            if results:
                results = [results.group()]
            else:
                results = []

        return results

    return find


if __name__ == '__main__':
    gc = pygsheets.authorize(service_file='client-secret.json')

    data = get_sheet_data(gc, '11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ', 'SGID Stewardship Info')
    data = [x for x in data if len(x['name'].strip()) > 0]
    html = create(data)

    file_path = join(dirname(__file__), '..', 'data', 'sgid-index', 'index.html')

    with open(file_path + '.bak', 'w', newline='\r\n') as data:
        data.writelines(html)

    rename(file_path + '.bak', file_path)
