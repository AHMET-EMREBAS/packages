import { ReadQuantityDto } from './dto';
import { Rest } from './imports';
import { Quantity } from './entity';

export const QuantityEntityName = 'Quantity';
export const QuantityViewName = 'Quantity';
export const QuantitySingularPath = 'quantity';
export const QuantityPluralPath = 'quantitys';
export const QuantitySingularViewPath = 'quantity-view';
export const QuantityPluralViewPath = 'quantitys-view';

export const QuantitySearchables: (keyof Quantity)[] = [];
export const QuantityUniqueFields: (keyof Quantity)[] = [];
export const QuantityViewSearchables: string[] = [];

export const QuantityRest = new Rest(
  QuantityEntityName,
  QuantitySingularPath,
  QuantityPluralPath,
  ReadQuantityDto
);
