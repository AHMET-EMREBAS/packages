import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { CustomerPhone } from '../entity';

@Dto()
export class QueryCustomerPhoneDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<CustomerPhone>;
}
