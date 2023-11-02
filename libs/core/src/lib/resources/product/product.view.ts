import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Product } from './product.entity';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .addSelect('c.name', 'name')
      .from(Product, 'c');
  },
})
export class ProductView {
  @ViewColumn() id!: number;
}
