import { ReadProductImageDto } from './dto';
import { Rest } from './imports';
import { ProductImage } from './entity';

export const ProductImageEntityName = 'ProductImage';
export const ProductImageViewName = 'ProductImage';
export const ProductImageSingularPath = 'product-image';
export const ProductImagePluralPath = 'product-images';
export const ProductImageSingularViewPath = 'product-image-view';
export const ProductImagePluralViewPath = 'product-images-view';

export const ProductImageSearchables: (keyof ProductImage)[] = [];
export const ProductImageUniqueFields: (keyof ProductImage)[] = [];
export const ProductImageViewSearchables: string[] = [];

export const ProductImageRest = new Rest(
  ProductImageEntityName,
  ProductImageSingularPath,
  ProductImagePluralPath,
  ReadProductImageDto
);
