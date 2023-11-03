import { ReadPriceDto } from './dto';
import { Rest } from './imports';

export const PriceEntityName = 'Price';
export const PriceViewName = 'Price';
export const PriceSingularPath = 'price';
export const PricePluralPath = 'prices';
export const PriceSingularViewPath = 'price-view';
export const PricePluralViewPath = 'prices-view';

export const PriceSearchables: string[] = [];
export const PriceUniqueFields: string[] = [];
export const PriceViewSearchables: string[] = [];

export const PriceRest = new Rest(
  PriceEntityName,
  PriceSingularPath,
  PricePluralPath,
  ReadPriceDto
);
