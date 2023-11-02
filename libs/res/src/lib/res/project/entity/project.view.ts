import { DataSource, ViewColumn, ViewEntity } from '../imports';
import { Project } from './project.entity';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Project, 'c');
  },
})
export class ProjectView {
  @ViewColumn() id!: number;
}
