import { PartialType, Dto } from '../imports';
import { CreateRoleDto } from './create-role.dto';

@Dto()
export class UpdateRoleDto extends PartialType(CreateRoleDto) {}
