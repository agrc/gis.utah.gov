import { convert } from 'html-to-text';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { mdxFromMarkdown } from 'mdast-util-mdx';
import { toString } from 'mdast-util-to-string';
import { mdxjs } from 'micromark-extension-mdxjs';

const htmlToTextOptions = {
  selectors: [
    { selector: 'h1', format: 'skip' },
    { selector: 'h2', format: 'skip' },
    { selector: 'h3', format: 'skip' },
    { selector: 'h4', format: 'skip' },
    { selector: 'h5', format: 'skip' },
    { selector: 'h6', format: 'skip' },
  ],
};

export default function getSnippetFromMarkdown(markdown: string, type: 'md' | 'mdx'): string {
  const options = type === 'mdx' ? { extensions: [mdxjs()], mdastExtensions: [mdxFromMarkdown()] } : null;

  const parsedMarkdown = fromMarkdown(markdown, options);

  const htmlOnly = parsedMarkdown.children.every((node) => node.type === 'html');
  const snippet = parsedMarkdown.children
    .map((node) => {
      if (node.type === 'html') {
        return convert(node.value, htmlToTextOptions);
      }

      if (['paragraph', 'text', 'link'].includes(node.type)) {
        return toString(node, { includeImageAlt: false });
      }

      return '';
    })
    .filter(Boolean)
    .join(' ');

  return (htmlOnly ? snippet : snippet.slice(0, 200)) || 'a blog post';
}
