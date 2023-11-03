import { CustomerPhone } from './customer-phone.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { Customer } from '../../customer';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(CustomerPhone, 'c');
  },
})
export class CustomerPhoneView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
