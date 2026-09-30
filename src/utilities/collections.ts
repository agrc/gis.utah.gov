import getReadingTimeFromMarkdown from '@utils/readingTime';
import getSnippetFromMarkdown from '@utils/blogSnippet';
import { getCollection, type CollectionEntry } from 'astro:content';
import { execSync } from 'child_process';

const getLastModifiedTime = (path: string) => {
  if (import.meta.env.DEV) {
    return new Date();
  }

  const updated = execSync(`git log -1 --pretty="format:%cI" ${path}`).toString();

  return !updated ? new Date() : new Date(updated);
};

type BlogEntry = CollectionEntry<'blog'>;

export type DecoratedBlogEntry = BlogEntry & {
  data: BlogEntry['data'] & {
    snippet: string;
    estimatedReadTime: string;
    lastUpdated: Date;
  };
};

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
      // console.log(`decorating post: ${post.filePath}`);

      const documentType = post.filePath?.split('.').pop() as 'md' | 'mdx';

      return {
        ...post,
        data: {
          ...post.data,
          snippet: getSnippetFromMarkdown(post.body ?? '', documentType),
          estimatedReadTime: getReadingTimeFromMarkdown(post.body ?? ''),
          lastUpdated: getLastModifiedTime(post.filePath ?? ''),
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

export async function getBlogFilters(
  filterType: 'categories' | 'tags' | 'authors',
  all: boolean = false,
): Promise<BlogFilter[]> {
  const posts = await getBlogPosts(all);

  const filtersWithPosts = posts.reduce((filteredPosts: Record<string, BlogFilter>, post: DecoratedBlogEntry) => {
    function addValue(filterValue: string) {
      const slug = slugify(filterValue);

      if (!filteredPosts[slug]) {
        filteredPosts[slug] = { slug, name: filterValue, posts: [] };
      }

      filteredPosts[slug].posts.push(post);
    }

    if (filterType === 'authors' && post.data.author) {
      addValue(post.data.author);
      if (post.data.co_author) {
        addValue(post.data.co_author);
      }
    } else if (filterType === 'categories') {
      addValue(post.data.category);
    } else if (post.data.tags) {
      post.data.tags.forEach(addValue);
    }

    return filteredPosts;
  }, {});

  return Object.keys(filtersWithPosts)
    .sort()
    .map((slug) => ({
      ...filtersWithPosts[slug],
    }));
}
