import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Phone } from '../entity';

@Dto()
export class QueryPhoneViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Phone>;
}
