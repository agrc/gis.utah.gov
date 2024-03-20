import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { validateUrl } from './utilities.mjs';

describe('validateUrl', () => {
  it('handles a valid url', async () => {
    const result = await validateUrl('https://www.google.com');
    assert(result.valid);
  });

  it('handles a redirected url', async () => {
    const result = await validateUrl('https://google.com');
    assert(result.valid);
    assert.equal(result.redirect, 'https://www.google.com/');
  });

  it('handles a 404 url', async () => {
    const result = await validateUrl('https://www.google.com/404');
    assert(!result.valid);
    assert.match(result.message, /404/);
  });

  it('handles a bad url', async () => {
    const result = await validateUrl('notAUrl');
    assert(!result.valid);
    assert.match(result.message, /invalid url/);
  });

  it('handles a timed out request', async () => {
    const result = await validateUrl('https://abadurl.hello');
    assert(!result.valid);
    assert.match(result.message, /failed request/);
  });
});
