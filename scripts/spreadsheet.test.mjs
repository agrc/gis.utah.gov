import assert from 'node:assert/strict';
import { after, describe, it } from 'node:test';
import { GoogleAuth } from 'google-auth-library';
import { closeDbClient, getSheet } from './utilities.mjs';

const metadata = {
  properties: { title: 'Test spreadsheet' },
  sheets: [{ properties: { sheetId: 0, title: 'SGID Index', index: 0 } }],
};

function mockRequests(t, fetch) {
  const githubActions = process.env.GITHUB_ACTIONS;
  process.env.GITHUB_ACTIONS = '';
  t.after(() => {
    if (githubActions === undefined) {
      delete process.env.GITHUB_ACTIONS;
    } else {
      process.env.GITHUB_ACTIONS = githubActions;
    }
  });
  t.mock.method(GoogleAuth.prototype, 'getRequestHeaders', async () => new Headers());
  return t.mock.method(globalThis, 'fetch', fetch);
}

after(closeDbClient);

describe('getSheet retries', () => {
  it('loads the worksheet after seven rate-limit retries', async (t) => {
    let attempts = 0;
    mockRequests(t, async () => {
      attempts++;
      return attempts <= 7
        ? new Response('', { status: 429, headers: { 'Retry-After': '1' } })
        : Response.json(metadata);
    });

    const sheet = await getSheet('test-spreadsheet');

    assert.equal(sheet.title, 'SGID Index');
    assert.equal(attempts, 8);
  });

  it('surfaces rate-limit errors after seven retries', async (t) => {
    const fetch = mockRequests(t, async () => new Response('', { status: 429, headers: { 'Retry-After': '1' } }));

    await assert.rejects(getSheet('test-spreadsheet'), (error) => error.response.status === 429);
    assert.equal(fetch.mock.callCount(), 8);
  });

  it('does not retry other HTTP errors', async (t) => {
    const fetch = mockRequests(t, async () => new Response('', { status: 500 }));

    await assert.rejects(getSheet('test-spreadsheet'), (error) => error.response.status === 500);
    assert.equal(fetch.mock.callCount(), 1);
  });

  it('does not retry network errors', async (t) => {
    const fetch = mockRequests(t, async () => {
      throw new TypeError('Network unavailable');
    });

    await assert.rejects(getSheet('test-spreadsheet'), /Network unavailable/);
    assert.equal(fetch.mock.callCount(), 1);
  });

  it('also retries rate-limited Drive POST requests', async (t) => {
    let postAttempts = 0;
    mockRequests(t, async (request) => {
      if (request.method === 'POST') {
        postAttempts++;
        return postAttempts === 1
          ? new Response('', { status: 429, headers: { 'Retry-After': '1' } })
          : Response.json({ id: 'test-spreadsheet' });
      }

      return Response.json(metadata);
    });
    const sheet = await getSheet('test-spreadsheet');

    const result = await sheet._spreadsheet.driveApi.post('permissions', { json: {} }).json();

    assert.equal(result.id, 'test-spreadsheet');
    assert.equal(postAttempts, 2);
  });
});
