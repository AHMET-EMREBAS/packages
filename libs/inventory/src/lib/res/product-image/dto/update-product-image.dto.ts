import { PartialType, Dto } from '../imports';
import { CreateProductImageDto } from './create-product-image.dto';

@Dto()
export class UpdateProductImageDto extends PartialType(CreateProductImageDto) {}
