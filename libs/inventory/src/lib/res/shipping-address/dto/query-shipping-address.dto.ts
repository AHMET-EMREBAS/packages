import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { ShippingAddress } from '../entity';
import { ShippingAddressSearchables } from '../shipping-address.meta';

@Dto()
export class QueryShippingAddressDto extends QueryDto {
  @SearchProperty(ShippingAddressSearchables)
  override search?: FindOptionsOrder<ShippingAddress>;
}
