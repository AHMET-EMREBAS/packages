import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { PriceLevel } from './price-level.entity';

@EventSubscriber()
export class PriceLevelSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<PriceLevel> {
    return PriceLevel;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
