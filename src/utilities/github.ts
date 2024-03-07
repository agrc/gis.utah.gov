import { Octokit } from "@octokit/core";
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
    })

    return response.data[0];
  }

  return releaseMetadata;
};
