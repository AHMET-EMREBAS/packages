import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Achievement } from '../entity';
import { AchievementViewSearchables } from '../achievement.meta';

@Dto()
export class QueryAchievementViewDto extends QueryDto {
  @SearchProperty(AchievementViewSearchables)
  override search?: FindOptionsOrder<Achievement>;
}
