import { Customer } from './customer.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Customer, 'c');
  },
})
export class CustomerView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
