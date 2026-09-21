export type AnnouncementScope = 'all-pages' | 'home-page';

export interface Announcement {
  message: string;
  action?: {
    href: string;
    label: string;
  };
  scope: AnnouncementScope;
  startsAt?: string;
  endsAt?: string;
}

function timestampIsValid(timestamp: string): boolean {
  const hasTimezone = timestamp.endsWith('Z') || /[+-]\d{2}:\d{2}$/.test(timestamp);

  return hasTimezone && !Number.isNaN(Date.parse(timestamp));
}

export function announcementDismissalKey(announcement: Announcement): string {
  return `ugrc-dismissed-announcement:${JSON.stringify(announcement)}`;
}

export function shouldDisplayAnnouncement(
  announcement: Announcement | undefined,
  pathname: string,
  now: Date = new Date(),
): boolean {
  if (!announcement) {
    return false;
  }

  if (announcement.scope === 'home-page' && pathname !== '/') {
    return false;
  }

  if (announcement.startsAt) {
    if (!timestampIsValid(announcement.startsAt) || now < new Date(announcement.startsAt)) {
      return false;
    }
  }

  if (announcement.endsAt) {
    if (!timestampIsValid(announcement.endsAt) || now >= new Date(announcement.endsAt)) {
      return false;
    }
  }

  return true;
}
