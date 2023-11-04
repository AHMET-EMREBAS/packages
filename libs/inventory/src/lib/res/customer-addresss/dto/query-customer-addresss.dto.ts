import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { CustomerAddresss } from '../entity';
import { CustomerAddresssSearchables } from '../customer-addresss.meta';

@Dto()
export class QueryCustomerAddresssDto extends QueryDto {
  @SearchProperty(CustomerAddresssSearchables)
  override search?: FindOptionsOrder<CustomerAddresss>;
}
