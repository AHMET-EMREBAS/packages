import { User } from './user.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { Role } from '../../role';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource.createQueryBuilder().select('c.id', 'id').from(User, 'c');
  },
})
export class UserView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
