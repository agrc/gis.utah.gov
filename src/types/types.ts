import type { Props as SectionProps } from '@components/page/Section.astro';

export interface IDataCategory {
  metadata: IMetadata;
  url: string;
}

export enum Pillar {
  PRODUCTS = 'Products',
  SOLUTIONS = 'Solutions',
  DOCUMENTATION = 'Documentation',
  COLLABORATION = 'Collaboration',
  BLOG = 'Blog',
  ABOUT = 'About',
  CONTACT = 'Contact',
}

export enum BlogCategory {
  // everything API related
  API = 'API',
  // everything data related
  SGID = 'SGID',
  // SGID roads ciy updates
  SGID_UPDATE = 'SGID Update',
  // everything network GPS related
  TURN = 'TURN',
  // everything related to base maps and services ? (there’s some overlap with SGID here)
  DISCOVER = 'Discover',
  // project updates through collaboration, events
  COLLABORATION = 'Collaboration',
  // survey related things not GPS network related
  SURVEYOR = 'Surveyor',
  // anything not related to the API
  DEVELOPER = 'Developer',
  // for others
  GUESTBLOG = 'Guest Blog',
  // everything else
  UGRC = 'UGRC',
}

export enum SgidCategory {
  ADDRESS = 'Address',
  AERIAL_PHOTOGRAPHY = 'Aerial-Photography',
  BASE_MAPS = 'Base-maps',
  BIOSCIENCE = 'Bioscience',
  BOUNDARIES = 'Boundaries',
  CADASTRE = 'Cadastre',
  CLIMATE = 'Climate',
  CONTOURS = 'Contours',
  DEMOGRAPHIC = 'Demographic',
  ECONOMY = 'Economy',
  ELEVATION = 'Elevation',
  EMERGENCY = 'Emergency',
  ENERGY = 'Energy',
  ENVIRONMENT = 'Environment',
  FARMING = 'Farming',
  GEOSCIENCE = 'Geoscience',
  HEALTH = 'Health',
  HISTORY = 'History',
  INDICES = 'Indices',
  LOCATION = 'Location',
  PLANNING = 'Planning',
  POLITICAL = 'Political',
  RECREATION = 'Recreation',
  SOCIETY = 'Society',
  TOPO = 'Topo',
  TRANSPORTATION = 'Transportation',
  UTILITIES = 'Utilities',
  WATER = 'Water',
}

type OptionalPick<T, K extends PropertyKey> = Pick<T, Extract<keyof T, K>>;
export interface IStandardPageMetadata {
  pageTitle: string;
  bannerHeading?: string;
  pageDescription?: string;
  pillar?: Pillar;
  section: OptionalPick<SectionProps, 'title' | 'subTitle' | 'actionUrl' | 'actionText'>[];
  image?: string;
}

export interface IMetadata {
  pageTitle: string;
  stewards: string[];
  type: ProductType;
  pageDescription: string;
  category: SgidCategory;
  secondaryCategory?: SgidCategory;
}

export interface IPageMetadata extends IMetadata {
  application?: string;
  updateHistory: string[];
  hub?: IHubDownload;
  links?: IDownloadLink[];
  config?: {
    skipInDepth?: boolean;
    stripeDescription?: boolean;
  };
}

export interface IDownloadLink {
  title: string;
  url: string;
}

export enum ProductType {
  TABLE,
  POINT,
  POLYLINE,
  POLYGON,
  ALL_GEOMETRIES,
  WEB_SERVICE,
  WEB_MAP,
  DESKTOP_APPLICATION,
  DISCOVER_SERVICE,
  ELEVATION_RASTER,
  IMAGERY_RASTER,
  GPS_NETWORK,
}

export interface IHubDownload {
  itemId: string;
  name: string;
  featureServiceHost?: string;
  featureServiceId?: string;
  mapServiceId?: string;
  openSgid?: string;
  layerId?: number;
  externalHubOrganization?: string;
  oddHubName?: string;
}

export type Contact = {
  name: string;
  email: string;
  agency?: string;
  phone?: string;
};
export interface Contacts {
  [key: string]: Contact | Contact[];
}

export type StewardshipRecord = {
  id: string;
  tableName: string;
  displayName: string;
  category: string | null;
  source: string[];
  dataType: ProductType;
  description: string;
  inActionUrl?: string;
  productPage: string;
  ugrcStatus: 'deprecated' | 'static' | 'shelved' | null;
  server?: {
    host?: string;
    serviceName: string;
    layerId: number;
  };
  hub?: {
    title: string;
    hubName?: string;
    organization?: string;
    itemId: string;
  };
  openSgid?: string;
};
