import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { ProfileImage } from '../entity';

@Dto()
export class QueryProfileImageDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<ProfileImage>;
}
