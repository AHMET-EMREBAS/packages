import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Department } from '../entity';

@Dto()
export class QueryDepartmentViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Department>;
}
