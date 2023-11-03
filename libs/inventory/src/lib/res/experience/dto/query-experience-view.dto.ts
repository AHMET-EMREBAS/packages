import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Experience } from '../entity';

@Dto()
export class QueryExperienceViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Experience>;
}
