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
    case ProductType.DESKTOP_APPLICATION:
      return 'Desktop application';
    case ProductType.DISCOVER_SERVICE:
      return 'Imagery web service';
    default:
      return type;
  }
};
