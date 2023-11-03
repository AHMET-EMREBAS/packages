import { PartialType, Dto } from '../imports';
import { CreateSocialMediaDto } from './create-social-media.dto';

@Dto()
export class UpdateSocialMediaDto extends PartialType(CreateSocialMediaDto) {}
