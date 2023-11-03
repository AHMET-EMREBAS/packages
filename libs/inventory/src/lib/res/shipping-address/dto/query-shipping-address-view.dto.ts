import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { ShippingAddress } from '../entity';

@Dto()
export class QueryShippingAddressViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<ShippingAddress>;
}
