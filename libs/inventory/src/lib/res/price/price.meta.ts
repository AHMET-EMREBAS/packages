import { ReadPriceDto } from './dto';
import { Rest } from './imports';
import { Price } from './entity';

export const PriceEntityName = 'Price';
export const PriceViewName = 'Price';
export const PriceSingularPath = 'price';
export const PricePluralPath = 'prices';
export const PriceSingularViewPath = 'price-view';
export const PricePluralViewPath = 'prices-view';

export const PriceSearchables: (keyof Price)[] = [];
export const PriceUniqueFields: (keyof Price)[] = [];
export const PriceViewSearchables: string[] = [];

export const PriceRest = new Rest(
  PriceEntityName,
  PriceSingularPath,
  PricePluralPath,
  ReadPriceDto
);
