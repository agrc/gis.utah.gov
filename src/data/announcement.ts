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
export const announcement: Announcement | undefined = undefined;
