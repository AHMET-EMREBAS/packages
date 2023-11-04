import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Department } from '../entity';
import { DepartmentViewSearchables } from '../department.meta';

@Dto()
export class QueryDepartmentViewDto extends QueryDto {
  @SearchProperty(DepartmentViewSearchables)
  override search?: FindOptionsOrder<Department>;
}
