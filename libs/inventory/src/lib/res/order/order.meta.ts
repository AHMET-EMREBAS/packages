import { ReadOrderDto } from './dto';
import { Rest } from './imports';

export const OrderEntityName = 'Order';
export const OrderViewName = 'Order';
export const OrderSingularPath = 'order';
export const OrderPluralPath = 'orders';
export const OrderSingularViewPath = 'order-view';
export const OrderPluralViewPath = 'orders-view';

export const OrderSearchables: string[] = [];
export const OrderUniqueFields: string[] = [];
export const OrderViewSearchables: string[] = [];

export const OrderRest = new Rest(
  OrderEntityName,
  OrderSingularPath,
  OrderPluralPath,
  ReadOrderDto
);
