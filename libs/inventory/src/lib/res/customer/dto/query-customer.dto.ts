import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Customer } from '../entity';

@Dto()
export class QueryCustomerDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Customer>;
}
