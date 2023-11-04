import { ReadDiscountDto } from './dto';
import { Rest } from './imports';
import { Discount } from './entity';

export const DiscountEntityName = 'Discount';
export const DiscountViewName = 'Discount';
export const DiscountSingularPath = 'discount';
export const DiscountPluralPath = 'discounts';
export const DiscountSingularViewPath = 'discount-view';
export const DiscountPluralViewPath = 'discounts-view';

export const DiscountSearchables: (keyof Discount)[] = [];
export const DiscountUniqueFields: (keyof Discount)[] = [];
export const DiscountViewSearchables: string[] = [];

export const DiscountRest = new Rest(
  DiscountEntityName,
  DiscountSingularPath,
  DiscountPluralPath,
  ReadDiscountDto
);
