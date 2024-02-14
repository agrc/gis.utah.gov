import { fromMarkdown } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';

export default function getReadingTimeFromMarkdown(markdown: string): string | undefined {
  return getReadingTime(toString(fromMarkdown(markdown))).text;
}
