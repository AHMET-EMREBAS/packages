import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Phone } from '../entity';
import { PhoneViewSearchables } from '../phone.meta';

@Dto()
export class QueryPhoneViewDto extends QueryDto {
  @SearchProperty(PhoneViewSearchables)
  override search?: FindOptionsOrder<Phone>;
}
