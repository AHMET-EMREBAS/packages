import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Address } from '../entity';

@Dto()
export class QueryAddressViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Address>;
}
