import { PartialType, Dto } from '../imports';
import { CreateSkillDto } from './create-skill.dto';

@Dto()
export class UpdateSkillDto extends PartialType(CreateSkillDto) {}
