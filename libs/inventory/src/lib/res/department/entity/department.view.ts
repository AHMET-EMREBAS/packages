import { Department } from './department.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Department, 'c');
  },
})
export class DepartmentView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
