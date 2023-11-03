import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Skill } from '../entity';

@Dto()
export class QuerySkillViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Skill>;
}
