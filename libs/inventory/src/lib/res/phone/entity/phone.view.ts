import { Phone } from './phone.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { User } from '../../user';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Phone, 'c');
  },
})
export class PhoneView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
