import { PartialType, Dto } from '../imports';
import { CreateExperienceDto } from './create-experience.dto';

@Dto()
export class UpdateExperienceDto extends PartialType(CreateExperienceDto) {}
