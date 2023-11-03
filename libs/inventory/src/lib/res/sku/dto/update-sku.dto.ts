import { PartialType, Dto } from '../imports';
import { CreateSkuDto } from './create-sku.dto';

@Dto()
export class UpdateSkuDto extends PartialType(CreateSkuDto) {}
