import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Permission } from '../entity';
import { PermissionViewSearchables } from '../permission.meta';

@Dto()
export class QueryPermissionViewDto extends QueryDto {
  @SearchProperty(PermissionViewSearchables)
  override search?: FindOptionsOrder<Permission>;
}
