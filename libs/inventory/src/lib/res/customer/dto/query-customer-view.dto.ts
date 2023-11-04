import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Customer } from '../entity';
import { CustomerViewSearchables } from '../customer.meta';

@Dto()
export class QueryCustomerViewDto extends QueryDto {
  @SearchProperty(CustomerViewSearchables)
  override search?: FindOptionsOrder<Customer>;
}
