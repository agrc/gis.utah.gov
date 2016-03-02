import sys
from json import loads
from os.path import join, dirname
from os import rename

json = '''{
    "data": [{
        "name": "SGID10.Boundaries.Counties",
        "link": "/data",
        "owner": "AGRC",
        "updated": "Yesterday"
    }, {
        "name": "SGID10.Boundaries.Roads",
        "link": "/data",
        "owner": "UDOT",
        "updated": "Yesterday"
    }]
}'''

def create():
    data = loads(json)
    html = '''---
layout: page
status: publish
title: Data page
permalink: /datatable
---
<script src="{{ "/bower_components/list.js/dist/list.min.js" | prepend: site.baseurl }}"></script>
<div id='table' class='table-style'>
    <input class="search" placeholder="Search" />
    <button class="sort" data-sort="name">
        Sort by name
    </button>
    <table>'''

    once = True
    for item in data['data']:
        if once:
            html += '''
        <thead>
            <tr>
                {}
            </tr>
        </thead>
    <tbody class='list'>'''.format('\n'.join(['<th scope="col">{}</th>'.format(key) for key in item.keys()]))
            once = False
        html += '''<tr>{}</tr>'''.format('\n'.join(['<td class="{}">{}</td>'.format(key, value) for key, value in item.iteritems()]))

    html += '''
        </tbody>
    </table>
</div>

<script>
var options = {
  valueNames: [ 'name', 'owner', 'updated' ]
};

var userList = new List('table', options);
</script>
'''

    return html

if __name__ == '__main__':
    html = create()
    file_path = join(dirname(__file__), '..', 'datatable.html')

    with open(file_path + '.bak', 'wb') as data:
        data.writelines(html)

    rename(file_path + '.bak', file_path)
