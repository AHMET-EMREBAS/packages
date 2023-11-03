import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Order } from './order.entity';

@EventSubscriber()
export class OrderSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Order> {
    return Order;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
