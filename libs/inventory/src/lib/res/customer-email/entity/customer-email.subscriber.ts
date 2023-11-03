import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { CustomerEmail } from './customer-email.entity';

@EventSubscriber()
export class CustomerEmailSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<CustomerEmail> {
    return CustomerEmail;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
