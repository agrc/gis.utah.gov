import startCase from 'lodash.capitalize';

import { convertProductType, getAgolUrl, getArcGisHubUrl, getFeatureServiceUrl } from '@utils/data';

import ExternalLink from '@components/react/ExternalLink';
import InfoPill from '@components/react/InfoPill';
import ShelvedPill from '@components/react/ShelvedPill';
import { type StewardshipRecord } from '@models/types';
import { Fragment } from 'react/jsx-runtime';
import dnrLogo from './dnr-logo.svg';
import udotLogo from './udot-logo.svg';
import ugrcLogo from './ugrc-logo.svg';

interface Props {
  astroSite: URL | undefined;
  record: StewardshipRecord;
}
export default function SgidIndexSearchCard({ astroSite, record }: Props) {
  type appLink = {
    url: string;
    title: string;
  };

  const apps = [] as appLink[];
  let urlString = record.productPage;
  const isShelved = record.refreshCycle?.toLowerCase() === 'shelved';

  // `apps` collects external links to show under the card (in display order).
  // Each entry is `{ url, title }` and may include: in-action page, ArcGIS Hub,
  // ArcGIS Online (AGOL), and the service Feature/Map endpoint.
  // `urlString` is the primary link used for the card title; it prefers
  // `productPage`, then falls back to Hub or Feature service when available.

  // always add the in action url no matter what
  if (record.inActionUrl) {
    apps.push({ url: record.inActionUrl, title: 'Data in action' });
  }
  // If a hub item exists, show Hub or AGOL depending on shelved state.
  if (record.hub?.itemId) {
    if (isShelved) {
      // Shelved: prefer AGOL for historical/reference access.
      apps.push({ url: getAgolUrl(record.hub), title: 'ArcGIS Online item' });
    } else {
      // Active: prefer Hub as the primary link when productPage is missing.
      const hubUrl = getArcGisHubUrl(record.hub);
      if (!urlString) urlString = hubUrl;
      apps.push({ url: hubUrl, title: 'ArcGIS Hub item' });
    }
  } else if (record.mapServer && !isShelved) {
    // If no hub item exists but a map server is defined, add its URL as an app link.
    if (!urlString) {
      urlString = record.mapServer;
    }

    apps.push({ url: record.mapServer, title: 'Map service' });
  }
  // If a server host is present, use its FeatureService as a link fallback
  // and add a service link to the `apps` list. `getFeatureServiceUrl`
  // should return a fully-qualified URL for the service/layer.
  if (record.server?.host) {
    if (!urlString) {
      urlString = getFeatureServiceUrl(record.server);
    }

    apps.push({ url: getFeatureServiceUrl(record.server), title: 'Feature service' });
  }

  let logo = ugrcLogo.src;
  let alternateText = 'SGID UGRC dataset';

  if (urlString.startsWith('https://')) {
    const url = new URL(urlString);
    switch (url.hostname) {
      case 'dwr-data-utahdnr.hub.arcgis.com':
        logo = dnrLogo.src;
        alternateText = 'SGID DNR dataset';
        break;
      case 'data-uplan.opendata.arcgis.com':
        logo = udotLogo.src;
        alternateText = 'SGID UDOT dataset';
        break;
    }
  } else {
    urlString = (import.meta.env.DEV ? 'http://localhost:4321' : astroSite?.href.slice(0, -1)) + urlString;
  }

  return (
    <div className="relative flex grow flex-col">
      {!isShelved ? (
        <a href={urlString} className="custom-style group" rel="nofollow noopener">
          <div className="flex items-center gap-2">
            <img src={logo} alt={alternateText} className="size-6" />
            <div className="text-xs">{`${urlString}`}</div>
          </div>
          <div className="flex items-center gap-2">
            <h4 className="group-hover:underline">{record.displayName}</h4>
          </div>
        </a>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <img src={logo} alt={alternateText} className="size-6" />
            <ShelvedPill />
          </div>
          <div className="flex items-center gap-2">
            <h4 className="group-hover:underline">{record.displayName}</h4>
          </div>
        </>
      )}
      <div className="primary-background dark:text-white">{record.description}</div>
      <div className="flex flex-wrap gap-x-1">
        <InfoPill label="Category">{startCase(record.category ?? 'Uncategorized')}</InfoPill>
        <InfoPill label="Type">{convertProductType(record.dataType)}</InfoPill>
        {record.openSgid && (
          <InfoPill label="Open SGID">
            <pre className="inline font-semibold text-secondary dark:text-white">
              {record.openSgid.split('.').map((part, index) => (
                <Fragment key={index}>
                  <span>
                    {part}
                    {index === 0 ? '.' : null}
                  </span>
                  <wbr />
                </Fragment>
              ))}
            </pre>
          </InfoPill>
        )}
        {record.source.length > 0 ? <InfoPill label="Source">{record.source.join(', ')}</InfoPill> : null}
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-1">
        {apps.length > 0 &&
          apps.map((app, index) => (
            <Fragment key={index}>
              <ExternalLink href={app.url}>{app.title}</ExternalLink>
              {index < apps.length - 1 && <span className="hidden sm:block">·</span>}
            </Fragment>
          ))}
      </div>
    </div>
  );
}
