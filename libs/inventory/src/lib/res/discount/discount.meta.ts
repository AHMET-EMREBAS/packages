import { ReadDiscountDto } from './dto';
import { Rest } from './imports';

export const DiscountEntityName = 'Discount';
export const DiscountViewName = 'Discount';
export const DiscountSingularPath = 'discount';
export const DiscountPluralPath = 'discounts';
export const DiscountSingularViewPath = 'discount-view';
export const DiscountPluralViewPath = 'discounts-view';

export const DiscountSearchables: string[] = [];
export const DiscountUniqueFields: string[] = [];
export const DiscountViewSearchables: string[] = [];

export const DiscountRest = new Rest(
  DiscountEntityName,
  DiscountSingularPath,
  DiscountPluralPath,
  ReadDiscountDto
);
