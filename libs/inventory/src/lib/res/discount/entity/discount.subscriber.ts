import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Discount } from './discount.entity';

@EventSubscriber()
export class DiscountSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Discount> {
    return Discount;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
