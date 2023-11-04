import { ReadPriceLevelDto } from './dto';
import { Rest } from './imports';
import { PriceLevel } from './entity';

export const PriceLevelEntityName = 'PriceLevel';
export const PriceLevelViewName = 'PriceLevel';
export const PriceLevelSingularPath = 'price-level';
export const PriceLevelPluralPath = 'price-levels';
export const PriceLevelSingularViewPath = 'price-level-view';
export const PriceLevelPluralViewPath = 'price-levels-view';

export const PriceLevelSearchables: (keyof PriceLevel)[] = [];
export const PriceLevelUniqueFields: (keyof PriceLevel)[] = ['priceLevel'];
export const PriceLevelViewSearchables: string[] = [];

export const PriceLevelRest = new Rest(
  PriceLevelEntityName,
  PriceLevelSingularPath,
  PriceLevelPluralPath,
  ReadPriceLevelDto
);
