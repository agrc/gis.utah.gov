import { readdirSync, readFileSync, writeFileSync } from 'fs';
import matter from 'gray-matter';
import ky from 'ky';
import { stringify } from 'yaml';

export function updateBlogPosts(update) {
  const blogPostFolder = '../content/blog';
  const filenames = readdirSync(blogPostFolder);

  for (const filename of filenames) {
    // console.log(`Processing ${filename}`);
    const file = readFileSync(`${blogPostFolder}/${filename}`, 'utf8');
    const { data: frontMatter, content } = matter(file);

    const updates = update(frontMatter, content);

    const newFileContent = `---\n${stringify(updates.frontMatter)}---\n${updates.content}`;

    writeFileSync(`${blogPostFolder}/${filename}`, newFileContent);
  }
}

export async function validateOpenDataUrl(url) {
  const domainToOrg = {
    'data.wfrc.org': 'wfrc',
    'opendata.gis.utah.gov': 'utah',
    'data-uplan.opendata.arcgis.com': 'uplan',
  };

  const match = /https:\/\/.*?\/datasets\/((?<org>.*)::)?(?<slug>.*?)(\/|$)/.exec(url);
  const slug = match.groups.slug;
  let org = match.groups.org;

  const domain = new URL(url).hostname;
  if (!Object.keys(domainToOrg).includes(domain)) {
    throw new Error(`Unknown domain: ${domain}`);
  }

  if (!org) {
    org = domainToOrg[domain];
  }
  const openDataQuery = 'https://opendata.arcgis.com/api/v3/datasets';
  const response = await ky(openDataQuery, {
    searchParams: {
      'fields[datasets]': 'slug,boundary,extent,recordCount,searchDescription,statistics',
      'filter[slug]': `${org}::${slug}`,
    },
  }).json();

  if (response.data.length === 0) {
    return {
      valid: false,
      message: 'open data item not found',
    };
  }

  return {
    valid: true,
    data: response.data[0],
    message: 'valid open data url',
  };
}

export async function validateProductPageUrl(url) {
  let parsedUrl;

  try {
    parsedUrl = new URL(url);
  } catch (error) {
    return {
      valid: false,
      message: `invalid url: ${error.message}`,
    };
  }

  let response;
  try {
    response = await ky(url, {
      throwHttpErrors: false,
      redirect: 'manual',
    });
  } catch (error) {
    return {
      valid: false,
      message: `failed request with error: ${error.message}`,
    };
  }

  if (!response.ok) {
    if ([301, 302].includes(response.status)) {
      let redirect = response.headers.get('location');
      if (redirect.startsWith('/')) {
        redirect = new URL(redirect, url).href;
      }

      return {
        redirect: `redirected to ${redirect}${parsedUrl.hash}${parsedUrl.search}`,
        ...(await validateProductPageUrl(`${redirect}`)),
      };
    }

    return {
      valid: false,
      message: `failed request with status: ${response.statusText} (${response.status})`,
    };
  }

  if (/\/datasets\//.test(url)) {
    return await validateOpenDataUrl(url);
  }

  return {
    valid: true,
    message: 'valid non-open data url',
  };
}
