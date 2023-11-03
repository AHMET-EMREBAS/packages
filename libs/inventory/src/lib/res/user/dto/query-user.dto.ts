import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { User } from '../entity';

@Dto()
export class QueryUserDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<User>;
}
