import { ProductType } from '@models/types';

export const convertProductType = (type: ProductType) => {
  switch (type) {
    case ProductType.POINT:
      return 'Point GIS data';
    case ProductType.POLYLINE:
      return 'Line GIS data';
    case ProductType.POLYGON:
      return 'Polygon GIS data';
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

export const getArcGisHubUrl = (hub: { title?: string; hubName?: any; organization?: any; itemId?: string }) => {
  let id = hub.hubName?.toLowerCase().replaceAll(' ', '-');

  if (hub.organization?.toLowerCase() !== 'utah') {
    id = `${hub.organization}::${id}`;
  }

  return `https://opendata.gis.utah.gov/datasets/${id}/about`;
};
