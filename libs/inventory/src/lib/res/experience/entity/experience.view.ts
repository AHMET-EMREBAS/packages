import { Experience } from './experience.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { Achievement } from '../../achievement';
import { User } from '../../user';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Experience, 'c');
  },
})
export class ExperienceView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
