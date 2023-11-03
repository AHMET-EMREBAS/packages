import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { CustomerAddresss } from '../entity';

@Dto()
export class QueryCustomerAddresssDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<CustomerAddresss>;
}
