import { ReadOrderItemDto } from './dto';
import { Rest } from './imports';
import { OrderItem } from './entity';

export const OrderItemEntityName = 'OrderItem';
export const OrderItemViewName = 'OrderItem';
export const OrderItemSingularPath = 'order-item';
export const OrderItemPluralPath = 'order-items';
export const OrderItemSingularViewPath = 'order-item-view';
export const OrderItemPluralViewPath = 'order-items-view';

export const OrderItemSearchables: (keyof OrderItem)[] = [];
export const OrderItemUniqueFields: (keyof OrderItem)[] = [];
export const OrderItemViewSearchables: string[] = [];

export const OrderItemRest = new Rest(
  OrderItemEntityName,
  OrderItemSingularPath,
  OrderItemPluralPath,
  ReadOrderItemDto
);
