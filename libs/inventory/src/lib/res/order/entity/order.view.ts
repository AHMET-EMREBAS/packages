import { Order } from './order.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { Customer } from '../../customer';
import { ShippingAddress } from '../../shipping-address';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Order, 'c');
  },
})
export class OrderView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
