import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { ShippingAddress } from '../entity';

@Dto()
export class QueryShippingAddressDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<ShippingAddress>;
}
