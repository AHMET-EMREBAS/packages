import { PartialType, Dto } from '../imports';
import { CreateCustomerEmailDto } from './create-customer-email.dto';

@Dto()
export class UpdateCustomerEmailDto extends PartialType(
  CreateCustomerEmailDto
) {}
