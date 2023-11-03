import { PartialType, Dto } from '../imports';
import { CreateAddressDto } from './create-address.dto';

@Dto()
export class UpdateAddressDto extends PartialType(CreateAddressDto) {}
