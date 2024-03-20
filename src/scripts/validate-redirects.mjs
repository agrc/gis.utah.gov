import { globSync } from 'glob';
import { open } from 'node:fs/promises';
import { join } from 'node:path';
import { validateUrl } from './utilities.mjs';

const redirectPath = join('..', '..', 'public', '_redirects');
let file = await open(redirectPath, 'r');

// get urls from built files
const fileUrls = globSync('../../dist/**/*.html', { ignore: '../../dist/404.html' }).map((path) =>
  path
    .replace('../../dist', '')
    .replace(/index\.html$/, '')
    .replace(/\/$/, ''),
);

const errors = [];
let isFirstLine = true;
for await (const line of file.readLines()) {
  if (isFirstLine) {
    isFirstLine = false;
    continue; // Skip the first line
  }

  let [source, destination] = line.split(' ').filter((l) => l);

  if (destination.startsWith('/')) {
    destination = destination.replace(/\/$/, '');
    if (!fileUrls.includes(destination)) {
      const message = `destination: "${destination}" not found`;
      console.error(message);
      errors.push(message);
    }
  } else {
    const response = await validateUrl(destination);
    if (!response.valid) {
      const message = `destination: ${destination} failed validation with message: ${response.message}`;
      console.error(message);
      errors.push(message);
    } else if (response.redirect) {
      console.warn(`destination: ${destination} is redirected to ${response.redirect}`);
    }
  }
}

file.close();

if (errors.length > 0) {
  process.exit(1);
}

process.exit(0);
