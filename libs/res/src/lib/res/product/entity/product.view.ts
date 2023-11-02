import { DataSource, ViewColumn, ViewEntity } from '../imports';
import { Product } from './product.entity';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Product, 'c');
  },
})
export class ProductView {
  @ViewColumn() id!: number;
}
