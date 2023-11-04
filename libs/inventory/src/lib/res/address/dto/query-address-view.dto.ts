import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Address } from '../entity';
import { AddressViewSearchables } from '../address.meta';

@Dto()
export class QueryAddressViewDto extends QueryDto {
  @SearchProperty(AddressViewSearchables)
  override search?: FindOptionsOrder<Address>;
}
