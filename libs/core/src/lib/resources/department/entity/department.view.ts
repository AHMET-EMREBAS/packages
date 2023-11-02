import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Department } from './department.entity';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .addSelect('c.name', 'name')
      .from(Department, 'c');
  },
})
export class DepartmentView {
  @ViewColumn() id!: number;
}
