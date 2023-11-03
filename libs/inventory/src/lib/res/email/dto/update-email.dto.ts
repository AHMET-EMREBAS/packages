import { PartialType, Dto } from '../imports';
import { CreateEmailDto } from './create-email.dto';

@Dto()
export class UpdateEmailDto extends PartialType(CreateEmailDto) {}
