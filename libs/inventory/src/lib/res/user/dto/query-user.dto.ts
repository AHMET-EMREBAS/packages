import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { User } from '../entity';
import { UserSearchables } from '../user.meta';

@Dto()
export class QueryUserDto extends QueryDto {
  @SearchProperty(UserSearchables)
  override search?: FindOptionsOrder<User>;
}
