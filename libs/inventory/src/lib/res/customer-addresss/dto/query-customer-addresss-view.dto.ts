import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { CustomerAddresss } from '../entity';

@Dto()
export class QueryCustomerAddresssViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<CustomerAddresss>;
}
