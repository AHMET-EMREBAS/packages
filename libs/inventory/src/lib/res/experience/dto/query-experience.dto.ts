import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Experience } from '../entity';
import { ExperienceSearchables } from '../experience.meta';

@Dto()
export class QueryExperienceDto extends QueryDto {
  @SearchProperty(ExperienceSearchables)
  override search?: FindOptionsOrder<Experience>;
}
