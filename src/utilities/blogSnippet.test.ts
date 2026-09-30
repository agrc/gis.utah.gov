import { describe, expect, it } from 'vitest';
import getSnippetFromMarkdown from './blogSnippet';

describe('getSnippetFromMarkdown', () => {
  it('omits headings from the excerpt', () => {
    const snippet = getSnippetFromMarkdown('## Services\n\nThe first paragraph explains the service.', 'md');

    expect(snippet).toBe('The first paragraph explains the service.');
  });

  it('omits headings from HTML-only excerpts', () => {
    const snippet = getSnippetFromMarkdown('<h2>Services</h2>\n<p>The first paragraph explains the service.</p>', 'md');

    expect(snippet).toBe('The first paragraph explains the service.');
  });

  it('preserves prose from multiple HTML blocks', () => {
    const snippet = getSnippetFromMarkdown(
      '<p>First paragraph.</p>\n\n<p>Second paragraph.</p>\n\n<h2>Services</h2>\n\n<p>Third paragraph.</p>',
      'md',
    );

    expect(snippet).toBe('First paragraph. Second paragraph. Third paragraph.');
  });

  it('separates consecutive paragraphs', () => {
    const snippet = getSnippetFromMarkdown('First paragraph.\n\nSecond paragraph.', 'md');

    expect(snippet).toBe('First paragraph. Second paragraph.');
  });
});
