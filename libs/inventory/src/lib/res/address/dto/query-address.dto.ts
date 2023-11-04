import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Address } from '../entity';
import { AddressSearchables } from '../address.meta';

@Dto()
export class QueryAddressDto extends QueryDto {
  @SearchProperty(AddressSearchables)
  override search?: FindOptionsOrder<Address>;
}
