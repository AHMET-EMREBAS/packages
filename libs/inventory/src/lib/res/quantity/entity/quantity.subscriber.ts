import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Quantity } from './quantity.entity';

@EventSubscriber()
export class QuantitySubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Quantity> {
    return Quantity;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
