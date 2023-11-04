import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Experience } from '../entity';
import { ExperienceViewSearchables } from '../experience.meta';

@Dto()
export class QueryExperienceViewDto extends QueryDto {
  @SearchProperty(ExperienceViewSearchables)
  override search?: FindOptionsOrder<Experience>;
}
