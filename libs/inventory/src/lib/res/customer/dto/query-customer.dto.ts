import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Customer } from '../entity';
import { CustomerSearchables } from '../customer.meta';

@Dto()
export class QueryCustomerDto extends QueryDto {
  @SearchProperty(CustomerSearchables)
  override search?: FindOptionsOrder<Customer>;
}
