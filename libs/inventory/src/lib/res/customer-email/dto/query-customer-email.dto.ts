import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { CustomerEmail } from '../entity';

@Dto()
export class QueryCustomerEmailDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<CustomerEmail>;
}
