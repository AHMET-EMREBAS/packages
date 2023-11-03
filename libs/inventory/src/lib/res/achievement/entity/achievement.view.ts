import { Achievement } from './achievement.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { User } from '../../user';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Achievement, 'c');
  },
})
export class AchievementView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
