import getReadingTimeFromMarkdown from '@utils/readingTime';
import { getCollection, type CollectionEntry } from 'astro:content';
import { execSync } from 'child_process';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';

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

let blogPostsCache;
export async function getBlogPosts(): Promise<DecoratedBlogEntry[]> {
  if (blogPostsCache) {
    return blogPostsCache;
  }

  const data = (await getCollection('blog'))
    .filter((post) => post.data.published)
    .sort((b, a) => a.data.date.valueOf() - b.data.date.valueOf())
    .map(
      (post): DecoratedBlogEntry => ({
        ...post,
        data: {
          ...post.data,
          description: toString(fromMarkdown(post.body)).slice(0, 200) ?? 'a blog post',
          estimatedReadTime: getReadingTimeFromMarkdown(post.body),
          lastUpdated: getLastModifiedTime(post.id),
        },
      }),
    );

  blogPostsCache = data;

  return data;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export type BlogFilter = {
  name: string;
  slug: string;
  posts: DecoratedBlogEntry[];
};

export async function getBlogFilters(filterType: 'categories' | 'tags' | 'authors'): Promise<BlogFilter[]> {
  const posts = await getBlogPosts();

  const filtersWithPosts = posts.reduce((acc: Record<string, BlogFilter>, post: DecoratedBlogEntry) => {
    function addValue(filterValue: string) {
      const slug = slugify(filterValue);
      if (!acc[slug]) {
        acc[slug] = { slug, name: filterValue, posts: [] };
      }

      acc[slug].posts.push(post);
    }
    if (filterType === 'authors' && post.data.author.display_name) {
      addValue(post.data.author.display_name);
    } else if (filterType === 'categories') {
      addValue(post.data.category);
    } else if (post.data.tags) {
      post.data.tags.forEach(addValue);
    }

    return acc;
  }, {});

  return Object.keys(filtersWithPosts)
    .sort()
    .map((slug) => ({
      ...filtersWithPosts[slug],
    }));
}
