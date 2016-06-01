# gis.utah.gov

Read [about our new website](http://gis.utah.gov/about-our-new-v6-website-in-ghpages).  
[Contribute](http://gis.utah.gov/about/contributing/) content or typos.  
License: [MIT](https://github.com/agrc/agrc.github.io/blob/master/LICENSE).

## Common Website Tips

```md
_italics_
**bold**
_**bold italics**_
```

#### link to page

- markdown
```md
[link text]({{ "/path/to/item/" | prepend: site.baseurl }})
```
- html
```html
<a href="{{ "/path/to/item/" | prepend: site.baseurl }}">link text</a>
```
#### link to post:

- markdown
```md
[link text]({{site.baseurl}}{% post_url 2016-05-26-file-name-without-extension %})
```
- html
```html
<a href="{{site.baseurl}}{% post_url 2016-05-26-file-name-without-extension %}">link text</a>
```

#### external link

- markdown
```md
[link text](http://external.website.location)
```

- [Kramdown reference](http://kramdown.gettalong.org/quickref.html)
- [Jekyll Cheat Sheat](http://cheat.jekyll.tips/)
