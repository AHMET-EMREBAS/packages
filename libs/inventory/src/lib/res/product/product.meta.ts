import { ReadProductDto } from './dto';
import { Rest } from './imports';
import { Product } from './entity';

export const ProductEntityName = 'Product';
export const ProductViewName = 'Product';
export const ProductSingularPath = 'product';
export const ProductPluralPath = 'products';
export const ProductSingularViewPath = 'product-view';
export const ProductPluralViewPath = 'products-view';

export const ProductSearchables: (keyof Product)[] = [];
export const ProductUniqueFields: (keyof Product)[] = ['name', 'barcode'];
export const ProductViewSearchables: string[] = [];

export const ProductRest = new Rest(
  ProductEntityName,
  ProductSingularPath,
  ProductPluralPath,
  ReadProductDto
);
