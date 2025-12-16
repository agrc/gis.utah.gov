import { ProductType, type StewardshipRecord } from '@models/types';

export const convertProductType = (type: ProductType) => {
  switch (type) {
    case ProductType.POINT:
      return 'Point GIS data';
    case ProductType.POLYLINE:
      return 'Line GIS data';
    case ProductType.POLYGON:
      return 'Polygon GIS data';
    case ProductType.ALL_GEOMETRIES:
      return 'Point, line, and polygon GIS data';
    case ProductType.WEB_SERVICE:
      return 'Web service';
    case ProductType.WEB_MAP:
      return 'Web map';
    case ProductType.DESKTOP_APPLICATION:
      return 'Desktop application';
    case ProductType.DISCOVER_SERVICE:
      return 'Imagery web service';
    case ProductType.ELEVATION_RASTER:
      return 'Elevation models';
    case ProductType.IMAGERY_RASTER:
      return 'Aerial photography';
    case ProductType.GPS_NETWORK:
      return 'GPS network';
    case ProductType.DASHBOARD:
      return 'Dashboard website';
    default:
      return type;
  }
};

export const removeDateRange = (title: string) => {
  return title.replace(/\s\d{4}( to \d{4})?$/, '').trim();
};

export const getFeatureServiceUrl = ({
  layerId = 0,
  host = 'https://services1.arcgis.com/99lidPhWCzftIe9K/arcgis/',
  serviceName,
}) => `${host}/rest/services/${serviceName}/FeatureServer/${layerId}`;
``;
export const getArcGisHubUrl = (hub: StewardshipRecord['hub']) => {
  if (!hub) {
    return '';
  }

  let id = hub.correctedSlug ?? (hub.hubName ? hub.hubName.toLowerCase().replaceAll(' ', '-') : '');

  if (hub.organization?.toLowerCase() !== 'utah') {
    id = `${hub.organization}::${id}`;
  }

  return `https://opendata.gis.utah.gov/datasets/${id}/about`;
};

export const getAgolUrl = (hub: { itemId?: string; organization?: string }) => {
  let host = 'www.arcgis.com';
  if (hub.organization?.toLowerCase() === 'utah') {
    host = 'utah.maps.arcgis.com';
  }

  return `https://${host}/home/item.html?id=${hub.itemId}`;
};
