import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Permission } from '../entity';

@Dto()
export class QueryPermissionDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Permission>;
}