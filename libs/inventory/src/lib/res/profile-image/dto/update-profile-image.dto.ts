import { PartialType, Dto } from '../imports';
import { CreateProfileImageDto } from './create-profile-image.dto';

@Dto()
export class UpdateProfileImageDto extends PartialType(CreateProfileImageDto) {}
