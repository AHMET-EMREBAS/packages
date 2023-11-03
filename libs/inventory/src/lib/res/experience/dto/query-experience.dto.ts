import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Experience } from '../entity';

@Dto()
export class QueryExperienceDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Experience>;
}
