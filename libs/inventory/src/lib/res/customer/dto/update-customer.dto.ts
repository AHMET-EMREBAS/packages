import { PartialType, Dto } from '../imports';
import { CreateCustomerDto } from './create-customer.dto';

@Dto()
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
