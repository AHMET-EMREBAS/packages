import { Permission } from './permission.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Permission, 'c');
  },
})
export class PermissionView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
