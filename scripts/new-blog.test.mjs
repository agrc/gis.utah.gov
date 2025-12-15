import mock from 'mock-fs';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { describe, it } from 'node:test';

import { createNewBlogPost, getDataFromIssue } from './new-blog.mjs';

describe('new-blog', () => {
  it('should parse the body into parts', () => {
    const body = `### Blog author\nSean Fernandez\n### Blog title\nGPS Network Highlights\n### Blog description\nUGRC is excited to share TURN GPS network updates including the network expansion of a full GNSS solution, and improvements to the servers.\n### Blog category\nTURN\n### <!---->\n<!-- bot = {"type":"blog-post"} -->`;
    const blog = getDataFromIssue(body);

    assert.equal(blog.title, 'GPS Network Highlights');
    assert.equal(
      blog.description,
      'UGRC is excited to share TURN GPS network updates including the network expansion of a full GNSS solution, and improvements to the servers.',
    );
    assert.equal(blog.category, 'TURN');
    assert.equal(blog.author, 'Sean Fernandez');
  });

  it('create a new blog post', () => {
    const blog = {
      title: 'GPS Network Highlights',
      description: '120-160 characters.',
      category: 'TURN',
      author: 'Sean Fernandez',
    };

    const filePath = '../src/content/blog/2024-07-15-gps-network-highlights.mdx';
    const slug = '2024-07-15-gps-network-highlights';

    mock({
      '../src/content/blog': {},
      '../src/images/pillar-blog': {},
    });

    createNewBlogPost(slug, blog, '2024-07-15T09:24:53.000Z');

    const file = fs.readFileSync(filePath, 'utf-8');

    assert.ok(file.includes('---'));
    assert.ok(file.includes('title: Gps network highlights'));
    assert.ok(file.includes('description: 120-160 characters.'));
    assert.ok(file.includes(`date: '2024-07-15T09:24:53.000Z'`));
    assert.ok(file.includes('author: Sean Fernandez'));
    assert.ok(file.includes('category: TURN'));

    mock.restore();
  });
});
