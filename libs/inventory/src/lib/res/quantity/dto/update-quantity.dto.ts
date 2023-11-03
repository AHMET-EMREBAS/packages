import { PartialType, Dto } from '../imports';
import { CreateQuantityDto } from './create-quantity.dto';

@Dto()
export class UpdateQuantityDto extends PartialType(CreateQuantityDto) {}
