import { PartialType, Dto } from '../imports';
import { CreateOrderDto } from './create-order.dto';

@Dto()
export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
