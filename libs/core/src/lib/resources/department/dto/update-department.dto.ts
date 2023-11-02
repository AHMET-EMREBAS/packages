import { CreateDepartmentDto } from './create-department.dto';
import { PartialType } from '@nestjs/swagger';
import { Dto } from '@techbir/typeorm';

@Dto()
export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {}
