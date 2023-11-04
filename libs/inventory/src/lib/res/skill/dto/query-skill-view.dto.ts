import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Skill } from '../entity';
import { SkillViewSearchables } from '../skill.meta';

@Dto()
export class QuerySkillViewDto extends QueryDto {
  @SearchProperty(SkillViewSearchables)
  override search?: FindOptionsOrder<Skill>;
}
