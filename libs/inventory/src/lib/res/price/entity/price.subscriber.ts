import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Price } from './price.entity';

@EventSubscriber()
export class PriceSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Price> {
    return Price;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
