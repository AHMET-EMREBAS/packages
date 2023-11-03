import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Phone } from './phone.entity';

@EventSubscriber()
export class PhoneSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Phone> {
    return Phone;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
