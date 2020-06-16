# gis.utah.gov

Read [about our new website](https://gis.utah.gov/about-our-new-v6-website-in-ghpages).
[Contribute](https://gis.utah.gov/about/contributing/) content or typos.
License: [MIT](/LICENSE).

[![Netlify Status](https://api.netlify.com/api/v1/badges/29158e9e-9b1c-4d85-995b-a3ca444ff187/deploy-status)](https://app.netlify.com/sites/gis-utah-gov/deploys) ![Security Headers](https://img.shields.io/security-headers?url=https%3A%2F%2Fsecurityheaders.com%2F%3Fq%3Dgis.utah.gov%26followRedirects%3Don)

## Local Development

1. Check out this repository
1. run `docker-compose up`
1. browse to `localhost:4000`
1. run `docker pull jekyll/jekyll:4` to update your image
1. run `grunt imagemin:images` to minify images

## Website maintenance

1. Check for dead or redirected links
   - `npx @tmcw/linkrot`

## Common Website Tips

- [Kramdown reference](http://kramdown.gettalong.org/quickref.html)
- [Jekyll Cheat Sheet](http://cheat.jekyll.tips/)

## Markdown syntax conventions

```md
_italics_
**bold**
_**bold italics**_
- list
```

### link to page

- markdown

  ```md
  [link text]({% link path/to/item.with-extension %})
  [link text]({% link path/to/item.with-extension %}#to-anchor)
  ```

- html

  ```html
  <a href="{% link path/to/item.with-extension %}">link text</a>
  <a href="{% link path/to/item.with-extension %}#to-anchor">link text</a>
  ```

### link to post

- markdown

  ```md
  [link text]({% link _posts/2016-05-26-file-name.with-extension %})
  [link text]({% link _posts/2016-05-26-file-name.with-extension %}#to-anchor)
  ```

- html

  ```html
  <a href="{% link _posts/2016-05-26-file-name.with-extension %}">link text</a>
  <a href="{% link _posts/2016-05-26-file-name.with-extension %}#to-anchor">link text</a>
  ```

### external link

- markdown

  ```md
  [link text](http://external.website.location)
  [link text](http://external.website.location#to-anchor)
  ```
  
- html

  ```html
  <a href="https://url.com">link text</a>
  <a href="https://url.com#to-anchor">link text</a>
  ```
  
### image link to an image

- markdown

   ```md
   [![displayed image alt text]({% link path/to/item.with-extension %})](![link to alt text]({% link path/to/item.with-extension %})
   ```

### images

- markdown

  ```md
  ![alt text]({% link path/to/item.with-extension %})
  ```

- html

  ```html
  <img src="{% link path/to/image.jpg" %} alt="hover text"/>
  ```

### link alt text

```md
[link text]({% link path/to/item.with-extension %} "popup text")
```

### css in markdown

```md
![alt text]({% link path/to/item.with-extension %})
{: .css-class-name}
```

### font matter

- `page` - the post vs page layout
- `title: Title` - the title of the content
- `author.display_name: Full Name` - The author of the content
- `author.email: email@address` - The author email
- `date: 2018-02-13` - the date the content was created
- `update_date: 2018-02-13` - this will show in under the title that the page has been updated
- `tags:` a list of tags
- `categories: Featured|Developer|SGID Blog|GPS-surveyor|Guestblog`
- `published: true|false`

### contact information

Contacts are managed in a [yml file](./_data/contacts.yml). **Please do not put email addresses directly into content**.

The include has a few properties:

- **subject**: the subject of the email link. Most of the time using `page.title` is good enough™
- **contact**: the contact in the yml file to create
- **text**: update this to change the default text generated
- **hide-punctuation**: set this to `true` if you would like to remove the `.` at the end of the text

- markdown

  ```liquid
  {% capture contact %}{% include contact.html subject=page.title contact=site.data.contacts.agrc %}{% endcapture %}
  {{ contact }}
  ```

- html

  ```liquid
  {% include contact.html subject=page.title contact=site.data.contacts.agrc %}
  ```

### hub downloads

This creates the download links from hub.

```yml
Item:
  hub:
    name: ArcGIS Online name exactly eg Utah Address Points
    item_id: the item id
    skip_shapefile: true or false optional
    skip_fgdb: true or false optional
    skip_hub: true or false optional
```
