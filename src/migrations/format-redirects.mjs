import { open } from 'node:fs/promises';
import { join } from 'node:path';

const redirectPath = join('..', '..', 'public', '_redirects');
let file = await open(redirectPath, 'r');

const lines = [];
let maxLength = 0;
for await (const line of file.readLines()) {
  const parts = line.split(' ').filter((l) => l);

  maxLength = Math.max(maxLength, parts[0].length);
  maxLength = Math.max(maxLength, parts[1].length);

  lines.push(parts);
}

maxLength += 5;
// sort lines array by second element of each item
lines.sort((a, b) => a[1].localeCompare(b[1]));

file.close();

file = await open(redirectPath, 'w');
lines.forEach((line) => {
  const [source, destination, _] = line;
  const firstPadding = ' '.repeat(maxLength - source.length);
  const lastPadding = ' '.repeat(maxLength - destination.length);

  const newLine = `${source}${firstPadding}${destination}${lastPadding}301`;

  file.write(newLine + '\n');
});

file.close();
process.exit(0);
