import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { CustomerPhone } from './customer-phone.entity';

@EventSubscriber()
export class CustomerPhoneSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<CustomerPhone> {
    return CustomerPhone;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
