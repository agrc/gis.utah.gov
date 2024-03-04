import getReadingTimeFromMarkdown from '@utils/readingTime';
import { getCollection, type CollectionEntry } from 'astro:content';
import { execSync } from 'child_process';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { mdxFromMarkdown } from 'mdast-util-mdx';
import { toString } from 'mdast-util-to-string';
import { mdxjs } from 'micromark-extension-mdxjs';
import { remove } from 'unist-util-remove';

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
    description: string;
    estimatedReadTime: string;
    lastUpdated: Date;
  };
};

function getDescriptionFromMarkdown(markdown: string, type: 'md' | 'mdx'): string {
  const options = type === 'mdx' ? { extensions: [mdxjs()], mdastExtensions: [mdxFromMarkdown()] } : null;

  const parsedMarkdown = fromMarkdown(markdown, options);

  // remove any non-text nodes such as ESM imports in MDX files
  remove(parsedMarkdown, (node) => !['paragraph', 'heading', 'text'].includes(node.type));

  return toString(parsedMarkdown, { includeImageAlt: false, includeHtml: false }).slice(0, 200) ?? 'a blog post';
}

let blogPostsCache: Record<'all' | 'published', DecoratedBlogEntry[]> = {
  all: [],
  published: [],
};
export async function getBlogPosts(all = false): Promise<DecoratedBlogEntry[]> {
  const cacheKey = all ? 'all' : 'published';
  if (!import.meta.env.DEV && blogPostsCache[cacheKey].length) {
    return blogPostsCache[cacheKey];
  }

  const data = (await getCollection('blog'))
    .filter((post) => all || post.data.published)
    .sort((b, a) => a.data.date.valueOf() - b.data.date.valueOf())
    .map((post): DecoratedBlogEntry => {
      // uncomment out this log to help debug markdown parsing issues
      // console.log(`decorating post: ${post.id}`);

      const documentType = post.id.split('.').pop() as 'md' | 'mdx';

      return {
        ...post,
        data: {
          ...post.data,
          description: getDescriptionFromMarkdown(post.body, documentType),
          estimatedReadTime: getReadingTimeFromMarkdown(post.body),
          lastUpdated: getLastModifiedTime(post.id),
        },
      };
    });

  blogPostsCache[cacheKey] = data;

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
