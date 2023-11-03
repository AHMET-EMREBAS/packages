import { PartialType, Dto } from '../imports';
import { CreateCustomerAddresssDto } from './create-customer-addresss.dto';

@Dto()
export class UpdateCustomerAddresssDto extends PartialType(
  CreateCustomerAddresssDto
) {}
