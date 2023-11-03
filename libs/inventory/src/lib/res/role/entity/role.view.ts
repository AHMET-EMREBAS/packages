import { Role } from './role.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { Permission } from '../../permission';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource.createQueryBuilder().select('c.id', 'id').from(Role, 'c');
  },
})
export class RoleView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
