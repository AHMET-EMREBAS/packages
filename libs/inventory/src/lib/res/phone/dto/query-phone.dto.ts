import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Phone } from '../entity';
import { PhoneSearchables } from '../phone.meta';

@Dto()
export class QueryPhoneDto extends QueryDto {
  @SearchProperty(PhoneSearchables)
  override search?: FindOptionsOrder<Phone>;
}
