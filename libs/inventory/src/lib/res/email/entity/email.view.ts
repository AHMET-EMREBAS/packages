import { Email } from './email.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { User } from '../../user';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .addSelect('user.id', 'userId')
      .addSelect('user.username', 'username')
      .from(Email, 'c')
      .leftJoin(User, 'user', 'user.id = c.userId');
  },
})
export class EmailView {
  @ViewColumn({ type: 'string' })
  id!: number;

  @ViewColumn({ type: 'number' }) userId!: number;
  
  @ViewColumn({ type: 'string' }) username!: string;
}
