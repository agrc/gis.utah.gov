import { describe, expect, it } from 'vitest';

import { shouldDisplayAnnouncement, type Announcement } from './announcement';

const now = new Date('2026-09-21T12:00:00Z');

const announcement: Announcement = {
  message: 'Scheduled maintenance is underway.',
  scope: 'all-pages',
};

const displayCases: Array<[string, Announcement, string, boolean]> = [
  ['shows an immediate, open-ended announcement', announcement, '/', true],
  ['hides an announcement before its start time', { ...announcement, startsAt: '2026-09-22T00:00:00Z' }, '/', false],
  ['hides an announcement after its end time', { ...announcement, endsAt: '2026-09-21T11:59:59Z' }, '/', false],
  ['hides an announcement with an invalid start time', { ...announcement, startsAt: 'not a timestamp' }, '/', false],
  ['hides an announcement with an invalid end time', { ...announcement, endsAt: 'not a timestamp' }, '/', false],
  ['shows a home-page announcement on the home page', { ...announcement, scope: 'home-page' }, '/', true],
  ['hides a home-page announcement on another page', { ...announcement, scope: 'home-page' }, '/products/', false],
];

describe('shouldDisplayAnnouncement', () => {
  it.each(displayCases)('%s', (_description, configuredAnnouncement, pathname, expected) => {
    expect(shouldDisplayAnnouncement(configuredAnnouncement, pathname, now)).toBe(expected);
  });

  it('hides an absent announcement', () => {
    expect(shouldDisplayAnnouncement(undefined, '/', now)).toBe(false);
  });
});
