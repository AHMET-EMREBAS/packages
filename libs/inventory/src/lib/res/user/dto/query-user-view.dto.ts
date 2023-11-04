import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { User } from '../entity';
import { UserViewSearchables } from '../user.meta';

@Dto()
export class QueryUserViewDto extends QueryDto {
  @SearchProperty(UserViewSearchables)
  override search?: FindOptionsOrder<User>;
}
