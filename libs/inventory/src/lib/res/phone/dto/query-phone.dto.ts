import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Phone } from '../entity';

@Dto()
export class QueryPhoneDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Phone>;
}
