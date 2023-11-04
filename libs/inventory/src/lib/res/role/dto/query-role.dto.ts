import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Role } from '../entity';
import { RoleSearchables } from '../role.meta';

@Dto()
export class QueryRoleDto extends QueryDto {
  @SearchProperty(RoleSearchables)
  override search?: FindOptionsOrder<Role>;
}
