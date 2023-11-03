import { ReadPriceLevelDto } from './dto';
import { Rest } from './imports';

export const PriceLevelEntityName = 'PriceLevel';
export const PriceLevelViewName = 'PriceLevel';
export const PriceLevelSingularPath = 'price-level';
export const PriceLevelPluralPath = 'price-levels';
export const PriceLevelSingularViewPath = 'price-level-view';
export const PriceLevelPluralViewPath = 'price-levels-view';

export const PriceLevelSearchables: string[] = [];
export const PriceLevelUniqueFields: string[] = [];
export const PriceLevelViewSearchables: string[] = [];

export const PriceLevelRest = new Rest(
  PriceLevelEntityName,
  PriceLevelSingularPath,
  PriceLevelPluralPath,
  ReadPriceLevelDto
);
