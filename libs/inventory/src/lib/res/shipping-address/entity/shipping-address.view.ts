import { ShippingAddress } from './shipping-address.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(ShippingAddress, 'c');
  },
})
export class ShippingAddressView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
