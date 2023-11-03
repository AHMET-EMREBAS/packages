import { PartialType, Dto } from '../imports';
import { CreateDiscountDto } from './create-discount.dto';

@Dto()
export class UpdateDiscountDto extends PartialType(CreateDiscountDto) {}
