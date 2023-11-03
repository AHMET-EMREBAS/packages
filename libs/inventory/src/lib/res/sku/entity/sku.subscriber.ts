import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Sku } from './sku.entity';

@EventSubscriber()
export class SkuSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Sku> {
    return Sku;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
