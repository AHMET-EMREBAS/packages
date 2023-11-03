import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Address } from './address.entity';

@EventSubscriber()
export class AddressSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Address> {
    return Address;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
