import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { ShippingAddress } from '../entity';
import { ShippingAddressViewSearchables } from '../shipping-address.meta';

@Dto()
export class QueryShippingAddressViewDto extends QueryDto {
  @SearchProperty(ShippingAddressViewSearchables)
  override search?: FindOptionsOrder<ShippingAddress>;
}
