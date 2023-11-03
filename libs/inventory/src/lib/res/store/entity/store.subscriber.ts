import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Store } from './store.entity';

@EventSubscriber()
export class StoreSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Store> {
    return Store;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
