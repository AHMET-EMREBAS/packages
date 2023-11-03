import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Role } from '../entity';

@Dto()
export class QueryRoleDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Role>;
}
