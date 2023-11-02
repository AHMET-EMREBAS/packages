import { CreateProductDto } from './create-product.dto';
import { PartialType } from '@nestjs/swagger';
import { Dto } from '@techbir/typeorm';

@Dto()
export class UpdateProductDto extends PartialType(CreateProductDto) {}
