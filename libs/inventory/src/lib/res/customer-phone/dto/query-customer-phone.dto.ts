import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { CustomerPhone } from '../entity';
import { CustomerPhoneSearchables } from '../customer-phone.meta';

@Dto()
export class QueryCustomerPhoneDto extends QueryDto {
  @SearchProperty(CustomerPhoneSearchables)
  override search?: FindOptionsOrder<CustomerPhone>;
}
