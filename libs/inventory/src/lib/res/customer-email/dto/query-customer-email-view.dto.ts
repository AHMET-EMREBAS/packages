import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { CustomerEmail } from '../entity';
import { CustomerEmailViewSearchables } from '../customer-email.meta';

@Dto()
export class QueryCustomerEmailViewDto extends QueryDto {
  @SearchProperty(CustomerEmailViewSearchables)
  override search?: FindOptionsOrder<CustomerEmail>;
}
