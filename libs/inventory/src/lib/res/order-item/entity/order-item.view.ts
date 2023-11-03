import { OrderItem } from './order-item.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { Sku } from '../../sku';
import { PriceLevel } from '../../price-level';
import { Order } from '../../order';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(OrderItem, 'c');
  },
})
export class OrderItemView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
