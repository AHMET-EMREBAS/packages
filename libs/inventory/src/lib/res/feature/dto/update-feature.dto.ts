import { PartialType, Dto } from '../imports';
import { CreateFeatureDto } from './create-feature.dto';

@Dto()
export class UpdateFeatureDto extends PartialType(CreateFeatureDto) {}
