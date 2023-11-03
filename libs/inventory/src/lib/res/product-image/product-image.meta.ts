import { ReadProductImageDto } from './dto';
import { Rest } from './imports';

export const ProductImageEntityName = 'ProductImage';
export const ProductImageViewName = 'ProductImage';
export const ProductImageSingularPath = 'product-image';
export const ProductImagePluralPath = 'product-images';
export const ProductImageSingularViewPath = 'product-image-view';
export const ProductImagePluralViewPath = 'product-images-view';

export const ProductImageSearchables: string[] = [];
export const ProductImageUniqueFields: string[] = [];
export const ProductImageViewSearchables: string[] = [];

export const ProductImageRest = new Rest(
  ProductImageEntityName,
  ProductImageSingularPath,
  ProductImagePluralPath,
  ReadProductImageDto
);
