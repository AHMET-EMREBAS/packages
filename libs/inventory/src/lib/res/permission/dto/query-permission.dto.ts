import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Permission } from '../entity';
import { PermissionSearchables } from '../permission.meta';

@Dto()
export class QueryPermissionDto extends QueryDto {
  @SearchProperty(PermissionSearchables)
  override search?: FindOptionsOrder<Permission>;
}
