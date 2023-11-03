import { PartialType, Dto } from '../imports';
import { CreatePhoneDto } from './create-phone.dto';

@Dto()
export class UpdatePhoneDto extends PartialType(CreatePhoneDto) {}
