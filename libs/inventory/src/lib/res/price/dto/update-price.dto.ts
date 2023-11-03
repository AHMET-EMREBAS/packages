import { PartialType, Dto } from '../imports';
import { CreatePriceDto } from './create-price.dto';

@Dto()
export class UpdatePriceDto extends PartialType(CreatePriceDto) {}
