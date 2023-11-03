import { Discount } from './discount.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { Sku } from '../../sku';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Discount, 'c');
  },
})
export class DiscountView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
