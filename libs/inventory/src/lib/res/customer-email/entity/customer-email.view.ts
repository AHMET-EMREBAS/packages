import { CustomerEmail } from './customer-email.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { Customer } from '../../customer';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(CustomerEmail, 'c');
  },
})
export class CustomerEmailView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
