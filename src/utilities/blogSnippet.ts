import { convert } from 'html-to-text';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { mdxFromMarkdown } from 'mdast-util-mdx';
import { toString } from 'mdast-util-to-string';
import { mdxjs } from 'micromark-extension-mdxjs';
import { remove } from 'unist-util-remove';

export default function getSnippetFromMarkdown(markdown: string, type: 'md' | 'mdx'): string {
  const options = type === 'mdx' ? { extensions: [mdxjs()], mdastExtensions: [mdxFromMarkdown()] } : null;

  const parsedMarkdown = fromMarkdown(markdown, options);

  if (parsedMarkdown.children.length === 1 && parsedMarkdown.children[0].type === 'html') {
    const snippet = convert(parsedMarkdown.children[0].value, {
      selectors: [
        { selector: 'h1', format: 'skip' },
        { selector: 'h2', format: 'skip' },
        { selector: 'h3', format: 'skip' },
        { selector: 'h4', format: 'skip' },
        { selector: 'h5', format: 'skip' },
        { selector: 'h6', format: 'skip' },
      ],
    });

    return snippet || 'a blog post';
  }

  remove(parsedMarkdown, (node) => !['paragraph', 'text', 'link'].includes(node.type));

  return (
    parsedMarkdown.children
      .map((node) => toString(node, { includeImageAlt: false }))
      .filter(Boolean)
      .join(' ')
      .slice(0, 200) || 'a blog post'
  );
}
