import { PartialType, Dto } from '../imports';
import { CreatePriceLevelDto } from './create-price-level.dto';

@Dto()
export class UpdatePriceLevelDto extends PartialType(CreatePriceLevelDto) {}
