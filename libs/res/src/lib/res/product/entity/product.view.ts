import { Product } from './product.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';

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
