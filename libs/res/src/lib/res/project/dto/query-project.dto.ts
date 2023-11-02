import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { ProjectMeta } from '../project.meta';
import { Project } from '../entity';

@Dto()
export class QueryProjectDto extends QueryDto {
  @SearchProperty(ProjectMeta.searchables)
  override search?: FindOptionsOrder<Project>;
}
