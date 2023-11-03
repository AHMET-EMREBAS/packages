import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { SocialMedia } from '../entity';

@Dto()
export class QuerySocialMediaDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<SocialMedia>;
}
