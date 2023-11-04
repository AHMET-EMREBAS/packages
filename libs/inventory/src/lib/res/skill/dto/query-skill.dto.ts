import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Skill } from '../entity';
import { SkillSearchables } from '../skill.meta';

@Dto()
export class QuerySkillDto extends QueryDto {
  @SearchProperty(SkillSearchables)
  override search?: FindOptionsOrder<Skill>;
}
