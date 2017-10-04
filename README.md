# gis.utah.gov

Read [about our new website](https://gis.utah.gov/about-our-new-v6-website-in-ghpages).
[Contribute](https://gis.utah.gov/about/contributing/) content or typos.
License: [MIT](/LICENSE).

## Local Development

1. Check out this repository
1. run `docker-compose up`
1. browse to `localhost:4000`
1. run `docker pull jekyll/jekyll:pages` to update your image

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

#### images

- markdown
```md
![alt text]({{ "/path/to/item/" | prepend: site.baseurl }})
```
- html
```html
<img src="{{ "/path/to/image.jpg" alt="hover text" | prepend: site.baseurl }}"/>
```

#### link alt text
```md
[link text]({{ "/path/to/item/" | prepend: site.baseurl }} "popup text")
```

#### css in markdown
```md
![alt text]({{ "/path/to/item/" | prepend: site.baseurl }})
{: .css-class-name}
```

- [Kramdown reference](http://kramdown.gettalong.org/quickref.html)
- [Jekyll Cheat Sheat](http://cheat.jekyll.tips/)
