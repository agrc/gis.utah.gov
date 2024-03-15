import { XMLParser } from 'fast-xml-parser';
import { readFileSync } from 'fs';
import { globSync } from 'glob';

const siteMapPath = '../../dist/sitemap-0.xml';

const parser = new XMLParser();

// get urls from sitemap
const siteMap = parser.parse(readFileSync(siteMapPath, 'utf8'));
const siteMapUrls = siteMap.urlset.url.map((node) => node.loc);

// get urls from built files
const fileUrls = globSync('../../dist/**/*.html', { ignore: '../../dist/404.html' }).map((path) =>
  path.replace('../../dist', 'https://gis.utah.gov').replace(/index\.html$/, ''),
);

const fileUrlsNotInSiteMap = fileUrls.filter((url) => !siteMapUrls.includes(url));
const siteMapUrlsNotInFile = siteMapUrls.filter((url) => !fileUrls.includes(url));

if (fileUrlsNotInSiteMap.length > 0) {
  console.log('\n\nSite map has missing entries:\n');
  console.log(fileUrlsNotInSiteMap.join('\n'));
}

if (siteMapUrlsNotInFile.length > 0) {
  console.log('\n\nSite map has extra entries:\n');
  console.log(siteMapUrlsNotInFile.join('\n'));
}

if (fileUrlsNotInSiteMap.length > 0 || siteMapUrlsNotInFile.length > 0) {
  process.exit(1);
}

console.log('Site map is valid');
process.exit(0);
