import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { DepartmentMeta } from '../department.meta';
import { Department } from '../entity';

@Dto()
export class QueryDepartmentViewDto extends QueryDto {
  @SearchProperty(DepartmentMeta.viewSearchables)
  override search?: FindOptionsOrder<Department>;
}
