import { ResourceMetadata, Rest } from './imports';

export const ProductMeta = new ResourceMetadata({
  entityName: 'Product',
  searchables: ['id', 'name'],
  uniq: ['name'],
  viewSearchables: ['id', 'name'],
});

export const ProductRest = new Rest(ProductMeta);
