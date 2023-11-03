import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Achievement } from '../entity';

@Dto()
export class QueryAchievementViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Achievement>;
}
