import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Contact } from './contact.entity';

@EventSubscriber()
export class ContactSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Contact> {
    return Contact;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
