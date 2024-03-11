import { ProductType } from '@models/products/sgid/types';

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
    default:
      return type;
  }
};

export const removeDateRange = (title: string) => {
  return title.replace(/\s\d{4}( to \d{4})?$/, '').trim();
};

export const getFeatureServiceUrl = ({
  layerId = 0,
  host = 'https://services1.arcgis.com/99lidPhWCzftIe9K/ArcGIS/rest/services/',
  serviceName,
}) => `${host}${serviceName}/FeatureServer/${layerId}`;

export const getArcGisHubUrl = (hub) => {
  let id = hub.hubName?.toLowerCase() || hub.title.toLowerCase().replaceAll(' ', '-');

  if (hub.organization) {
    id = `${hub.organization.toUpperCase()}::${id}`;
  }

  return `https://opendata.gis.utah.gov/datasets/${id}`;
}
