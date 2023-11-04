import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { CustomerPhone } from '../entity';
import { CustomerPhoneViewSearchables } from '../customer-phone.meta';

@Dto()
export class QueryCustomerPhoneViewDto extends QueryDto {
  @SearchProperty(CustomerPhoneViewSearchables)
  override search?: FindOptionsOrder<CustomerPhone>;
}
