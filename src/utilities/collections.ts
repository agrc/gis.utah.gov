import getReadingTimeFromMarkdown from '@utils/readingTime';
import { getCollection, type CollectionEntry } from 'astro:content';
import { execSync } from 'child_process';

const getLastModifiedTime = (path: string) => {
  if (import.meta.env.DEV) {
    return new Date();
  }

  const updated = execSync(`git log -1 --pretty="format:%cI" ./src/content/blog/${path}`).toString();

  return !updated ? new Date() : new Date(updated);
};

type BlogEntry = CollectionEntry<'blog'>;

export type DecoratedBlogEntry = BlogEntry & {
  data: BlogEntry['data'] & {
    estimatedReadTime?: string;
    lastUpdated: Date;
  };
};

export async function getBlogPosts(): Promise<DecoratedBlogEntry[]> {
  return (await getCollection('blog'))
    .filter((post) => post.data.published)
    .sort((b, a) => a.data.date.valueOf() - b.data.date.valueOf())
    .map(
      (post): DecoratedBlogEntry => ({
        ...post,
        data: {
          ...post.data,
          estimatedReadTime: getReadingTimeFromMarkdown(post.body),
          lastUpdated: getLastModifiedTime(post.id),
        },
      }),
    );
}
