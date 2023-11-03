import { PartialType, Dto } from '../imports';
import { CreateShippingAddressDto } from './create-shipping-address.dto';

@Dto()
export class UpdateShippingAddressDto extends PartialType(
  CreateShippingAddressDto
) {}
