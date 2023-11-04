import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { CustomerEmail } from '../entity';
import { CustomerEmailSearchables } from '../customer-email.meta';

@Dto()
export class QueryCustomerEmailDto extends QueryDto {
  @SearchProperty(CustomerEmailSearchables)
  override search?: FindOptionsOrder<CustomerEmail>;
}
