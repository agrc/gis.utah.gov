import type { Announcement } from '@utils/announcement';

// Configure one announcement for the next deployment, or leave undefined to hide it.
// Omit startsAt to show it immediately and endsAt to leave it visible until a later deployment.
// Scheduled timestamps must include a timezone, such as 2026-10-01T08:00:00-06:00.
//
// Example configuration:
// {
//   message: 'The site will be unavailable for maintenance on October 1.',
//   scope: 'all-pages', // Use 'home-page' to show only on the home page.
//   startsAt: '2026-10-01T08:00:00-06:00',
//   endsAt: '2026-10-01T12:00:00-06:00',
//   action: {
//     href: '/status/',
//     label: 'View status',
//   },
// }
// export const announcement: Announcement | undefined = {
//   message: 'Changes are coming to the SITLA Land Ownership layer!',
//   scope: 'all-pages',
//   action: {
//     href: 'https://example.com',
//     label: 'Learn more',
//   },
// };
export const announcement: Announcement | undefined = {
  message:
    'Scheduled maintenance of TURN GPS and NevadaGPS systems on Tuesday, October 20th, between 6:00 a.m. and 10:00 a.m.',
  scope: 'all-pages',
  startsAt: '2026-10-06T16:27:05.164Z',
  endsAt: '2026-10-20T10:00:00-06:00',
  action: {
    href: '/status/',
    label: 'View status',
  },
};
