import { Skill } from './skill.entity';
import { ViewEntity, ViewColumn, DataSource } from '../imports';
import { User } from '../../user';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('c.id', 'id')
      .from(Skill, 'c');
  },
})
export class SkillView {
  @ViewColumn({ type: 'string' })
  id!: number;
}
