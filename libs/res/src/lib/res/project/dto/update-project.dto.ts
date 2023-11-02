import { PartialType, Dto } from '../imports';
import { CreateProjectDto } from './create-project.dto';

@Dto()
export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
