import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { DepartmentMeta } from '../department.meta';
import { Department } from '../entity';

@Dto()
export class QueryDepartmentDto extends QueryDto {
  @SearchProperty(DepartmentMeta.searchables)
  override search?: FindOptionsOrder<Department>;
}
