import { PartialType, Dto } from '../imports';
import { CreateUserDto } from './create-user.dto';

@Dto()
export class UpdateUserDto extends PartialType(CreateUserDto) {}
