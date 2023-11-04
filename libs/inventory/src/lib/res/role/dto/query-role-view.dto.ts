import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Role } from '../entity';
import { RoleViewSearchables } from '../role.meta';

@Dto()
export class QueryRoleViewDto extends QueryDto {
  @SearchProperty(RoleViewSearchables)
  override search?: FindOptionsOrder<Role>;
}
