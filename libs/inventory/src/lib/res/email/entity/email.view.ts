import { Email } from './email.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { User } from '../../user';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Email, 'c');
  },
})
export class EmailView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
