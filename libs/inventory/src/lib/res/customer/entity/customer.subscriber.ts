import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Customer } from './customer.entity';

@EventSubscriber()
export class CustomerSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Customer> {
    return Customer;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
