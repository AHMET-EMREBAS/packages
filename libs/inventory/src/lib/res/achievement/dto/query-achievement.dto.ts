import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Achievement } from '../entity';

@Dto()
export class QueryAchievementDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Achievement>;
}
