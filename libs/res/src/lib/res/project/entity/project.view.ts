import { Project } from './project.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Project, 'c');
  },
})
export class ProjectView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
