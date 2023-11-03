import { PartialType, Dto } from '../imports';
import { CreateOrderItemDto } from './create-order-item.dto';

@Dto()
export class UpdateOrderItemDto extends PartialType(CreateOrderItemDto) {}
