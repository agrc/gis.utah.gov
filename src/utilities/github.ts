export const getGithubReleases = async (repo) => {
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
    const res = await fetch(`https://api.github.com/repos/agrc/${repo}/releases?per_page=1`);

    const releases = await res.json();

    return releases[0];
  }

  return releaseMetadata;
};
