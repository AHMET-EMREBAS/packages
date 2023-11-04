import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Achievement } from '../entity';
import { AchievementSearchables } from '../achievement.meta';

@Dto()
export class QueryAchievementDto extends QueryDto {
  @SearchProperty(AchievementSearchables)
  override search?: FindOptionsOrder<Achievement>;
}
