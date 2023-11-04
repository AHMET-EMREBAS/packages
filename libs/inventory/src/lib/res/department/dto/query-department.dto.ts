import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Department } from '../entity';
import { DepartmentSearchables } from '../department.meta';

@Dto()
export class QueryDepartmentDto extends QueryDto {
  @SearchProperty(DepartmentSearchables)
  override search?: FindOptionsOrder<Department>;
}
