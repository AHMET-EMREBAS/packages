import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { CustomerAddresss } from '../entity';
import { CustomerAddresssViewSearchables } from '../customer-addresss.meta';

@Dto()
export class QueryCustomerAddresssViewDto extends QueryDto {
  @SearchProperty(CustomerAddresssViewSearchables)
  override search?: FindOptionsOrder<CustomerAddresss>;
}
