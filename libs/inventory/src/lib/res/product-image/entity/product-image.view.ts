import { ProductImage } from './product-image.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { Product } from '../../product';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(ProductImage, 'c');
  },
})
export class ProductImageView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
