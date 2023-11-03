import { CustomerAddresss } from './customer-addresss.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { Customer } from '../../customer';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(CustomerAddresss, 'c');
  },
})
export class CustomerAddresssView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
