import startCase from 'lodash.capitalize';

import { convertProductType, getArcGisHubUrl, getFeatureServiceUrl } from '@utils/data';

import ExternalLink from '@components/react/ExternalLink';
import { type StewardshipRecord } from '@models/products/sgid/types';
import { Fragment } from 'react/jsx-runtime';
import dnrLogo from './dnr-logo.svg';
import udotLogo from './udot-logo.svg';
import ugrcLogo from './ugrc-logo.svg';

interface Props {
  astroSite: URL | undefined;
  record: StewardshipRecord;
  resultIndex: number;
}
export default function SgidIndexSearchCard({ astroSite, record, resultIndex }: Props) {
  type appLink = {
    url: string;
    title: string;
  };

  const apps = [] as appLink[];
  let urlString = record.productPage;

  if (record.inActionUrl) {
    apps.push({ url: record.inActionUrl, title: 'Data in action' });
  }
  if (record.hub?.itemId) {
    if (!urlString) {
      urlString = getArcGisHubUrl(record.hub);
    }

    apps.push({ url: getArcGisHubUrl(record.hub), title: 'ArcGIS Hub item' });
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
    <div className="flex grow flex-col">
      <a href={urlString} className="custom-style group" rel="nofollow noopener">
        <div className="flex items-center gap-2">
          <img src={logo} alt={alternateText} className="size-6" />
          <div className="text-xs">{`${urlString}`}</div>
        </div>
        <h4 className="group-hover:underline">{record.displayName}</h4>
      </a>
      <div className="primary-background dark:text-white">{record.description}</div>
      <div className="flex flex-wrap space-x-2">
        <div>
          <span className="text-sm font-semibold text-secondary dark:text-white">Category: </span>
          <span>{startCase(record.category ?? 'Uncategorized')}</span>
        </div>
        <div>
          <span className="text-sm font-semibold text-secondary dark:text-white">Type: </span>
          <span>{convertProductType(record.dataType)}</span>
        </div>
        {record.openSgid && (
          <div>
            <span className="text-sm font-semibold text-secondary dark:text-white">Open SGID: </span>
            <pre className="inline text-sm">{record.openSgid}</pre>
          </div>
        )}
        {record.source ? (
          <div>
            <span className="text-sm font-semibold text-secondary dark:text-white">Source: </span>
            <span>{record.source}</span>
          </div>
        ) : null}
      </div>
      <div className="flex gap-1">
        {apps.length > 0 &&
          apps.map((app, index) => (
            <Fragment key={index}>
              <ExternalLink href={app.url}>{app.title}</ExternalLink>
              {index < apps.length - 1 && <span>·</span>}
            </Fragment>
          ))}
      </div>
    </div>
  );
}
