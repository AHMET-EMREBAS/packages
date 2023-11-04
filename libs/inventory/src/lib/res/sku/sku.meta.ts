import { ReadSkuDto } from './dto';
import { Rest } from './imports';
import { Sku } from './entity';

export const SkuEntityName = 'Sku';
export const SkuViewName = 'Sku';
export const SkuSingularPath = 'sku';
export const SkuPluralPath = 'skus';
export const SkuSingularViewPath = 'sku-view';
export const SkuPluralViewPath = 'skus-view';

export const SkuSearchables: (keyof Sku)[] = [];
export const SkuUniqueFields: (keyof Sku)[] = ['barcode', 'sku'];
export const SkuViewSearchables: string[] = [];

export const SkuRest = new Rest(
  SkuEntityName,
  SkuSingularPath,
  SkuPluralPath,
  ReadSkuDto
);
