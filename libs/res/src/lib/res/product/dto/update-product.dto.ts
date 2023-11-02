import { PartialType, Dto } from '../imports';
import { CreateProductDto } from './create-product.dto';

@Dto()
export class UpdateProductDto extends PartialType(CreateProductDto) {}
