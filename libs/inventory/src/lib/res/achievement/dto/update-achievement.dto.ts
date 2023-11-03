import { PartialType, Dto } from '../imports';
import { CreateAchievementDto } from './create-achievement.dto';

@Dto()
export class UpdateAchievementDto extends PartialType(CreateAchievementDto) {}
