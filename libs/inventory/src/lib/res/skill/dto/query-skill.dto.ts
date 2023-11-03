import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Skill } from '../entity';

@Dto()
export class QuerySkillDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Skill>;
}
