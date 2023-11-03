import { Product } from './product.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { Category } from '../../category';
import { Feature } from '../../feature';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Product, 'c');
  },
})
export class ProductView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
