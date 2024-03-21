import { Octokit } from '@octokit/core';
const octokit = new Octokit();

export const getGithubReleases = async (repo: string) => {
  let releaseMetadata = {
    published_at: '2021-08-31T00:00:00Z',
    tag_name: 'v1.0.0',
    assets: [
      {
        name: 'win32-setup.exe',
        browser_download_url: 'https://gis.utah.gov',
      },
      {
        name: 'x64.dmg',
        browser_download_url: 'https://gis.utah.gov',
      },
    ],
  };

  if (import.meta.env.PROD) {
    const response = await octokit.request('GET /repos/{owner}/{repo}/releases', {
      owner: 'agrc',
      repo,
      per_page: 1,
    });

    return response.data[0];
  }

  return releaseMetadata;
};


export const getAllContributors = async (repo: string) => {
  const contributors = await recursiveFetch(repo);

  return contributors;
};

const recursiveFetch = async (repo: string, page = 1) => {
  const pageSize = 100;
  try {
    if (import.meta.env.NETLIFY) {
      const response = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
        owner: 'agrc',
        repo,
        per_page: pageSize,
        page,
      });

      const data = response.data;

      if (data.length === pageSize) {
        const rest = await recursiveFetch(repo, page + 1);
        data.push(...rest);
      }

      return data;
    }
  } catch (e) {
    return [];
  }

  return [];
};
