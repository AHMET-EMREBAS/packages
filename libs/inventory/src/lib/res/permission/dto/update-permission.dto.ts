import { PartialType, Dto } from '../imports';
import { CreatePermissionDto } from './create-permission.dto';

@Dto()
export class UpdatePermissionDto extends PartialType(CreatePermissionDto) {}
