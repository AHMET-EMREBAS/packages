import { Address } from './address.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { User } from '../../user';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Address, 'c');
  },
})
export class AddressView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
