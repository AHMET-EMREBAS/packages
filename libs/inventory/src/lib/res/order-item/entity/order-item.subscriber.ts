import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { OrderItem } from './order-item.entity';

@EventSubscriber()
export class OrderItemSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<OrderItem> {
    return OrderItem;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
