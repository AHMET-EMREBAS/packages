import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { ProfileImage } from '../entity';
import { ProfileImageViewSearchables } from '../profile-image.meta';

@Dto()
export class QueryProfileImageViewDto extends QueryDto {
  @SearchProperty(ProfileImageViewSearchables)
  override search?: FindOptionsOrder<ProfileImage>;
}
