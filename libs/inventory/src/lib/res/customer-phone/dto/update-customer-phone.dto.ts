import { PartialType, Dto } from '../imports';
import { CreateCustomerPhoneDto } from './create-customer-phone.dto';

@Dto()
export class UpdateCustomerPhoneDto extends PartialType(
  CreateCustomerPhoneDto
) {}
