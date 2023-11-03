import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { ProjectMeta } from '../project.meta';
import { Project } from '../entity';

@Dto()
export class QueryProjectViewDto extends QueryDto {
  @SearchProperty(ProjectMeta.viewSearchables)
  override search?: FindOptionsOrder<Project>;
}
