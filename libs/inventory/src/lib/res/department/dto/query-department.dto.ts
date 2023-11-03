import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Department } from '../entity';

@Dto()
export class QueryDepartmentDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Department>;
}
