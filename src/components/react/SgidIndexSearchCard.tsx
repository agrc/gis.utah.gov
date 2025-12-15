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

  if (record.inActionUrl) {
    apps.push({ url: record.inActionUrl, title: 'Data in action' });
  }

  if (record.hub?.itemId && record.refreshCycle !== 'Shelved') {
    if (!urlString) {
      urlString = getArcGisHubUrl(record.hub);
    }

    apps.push({ url: getArcGisHubUrl(record.hub), title: 'ArcGIS Hub item' });
  }

  if (record.refreshCycle?.toLowerCase() === 'shelved' && record.hub?.itemId) {
    apps.push({ url: getAgolUrl(record.hub), title: 'ArcGIS Online item' });
  }

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
      {record.refreshCycle !== 'Shelved' ? (
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
