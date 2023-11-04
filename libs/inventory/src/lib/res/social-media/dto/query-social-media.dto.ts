import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { SocialMedia } from '../entity';
import { SocialMediaSearchables } from '../social-media.meta';

@Dto()
export class QuerySocialMediaDto extends QueryDto {
  @SearchProperty(SocialMediaSearchables)
  override search?: FindOptionsOrder<SocialMedia>;
}
