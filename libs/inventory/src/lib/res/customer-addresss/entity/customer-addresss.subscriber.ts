import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { CustomerAddresss } from './customer-addresss.entity';

@EventSubscriber()
export class CustomerAddresssSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<CustomerAddresss> {
    return CustomerAddresss;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
