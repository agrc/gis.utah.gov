import { open } from 'node:fs/promises';
import { join } from 'node:path';

const redirectPath = join('..', '..', 'public', '_redirects');
const readFile = await open(redirectPath, 'r');

function standardize(url) {
  if (url.startsWith('/')) {
    url = url.trim().toLocaleLowerCase();
  }
  if (url.match(/^\/.*\w$/)) {
    url = `${url}/`;
  }

  return url;
}

const redirects = {};
let maxLength = 0;
let skipFirstLine = true;
for await (const line of readFile.readLines()) {
  if (skipFirstLine) {
    skipFirstLine = false;
    continue;
  }

  let [source, destination] = line.split(' ').filter((l) => l.trim());
  source = standardize(source);
  destination = standardize(destination);

  maxLength = Math.max(maxLength, source.length);
  maxLength = Math.max(maxLength, destination.length);

  redirects[source] = destination;
}
readFile.close();

// look for destinations that match existing sources
for (const source in redirects) {
  const destination = redirects[source];
  if (redirects[destination]) {
    redirects[source] = redirects[destination];
    console.warn(`destination updated: source=${source} destination=${destination} -> ${redirects[destination]}`);
  }
}

const lines = Object.entries(redirects);
maxLength += 5;
// sort lines array by second element of each item
lines.sort((a, b) => a[1].localeCompare(b[1]));
lines.unshift(['#source', 'destination']);

const writeFile = await open(redirectPath, 'w');
lines.forEach((line) => {
  const [source, destination] = line;
  const firstPadding = ' '.repeat(maxLength - source.length);
  const lastPadding = ' '.repeat(maxLength - destination.length);

  const newLine = `${source}${firstPadding}${destination}${lastPadding}301`;

  writeFile.write(newLine + '\n');
});

writeFile.close();
process.exit(0);
