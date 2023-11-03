import { PartialType, Dto } from '../imports';
import { CreateDepartmentDto } from './create-department.dto';

@Dto()
export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {}
