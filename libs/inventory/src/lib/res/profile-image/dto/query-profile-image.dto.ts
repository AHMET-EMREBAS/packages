import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { ProfileImage } from '../entity';
import { ProfileImageSearchables } from '../profile-image.meta';

@Dto()
export class QueryProfileImageDto extends QueryDto {
  @SearchProperty(ProfileImageSearchables)
  override search?: FindOptionsOrder<ProfileImage>;
}
