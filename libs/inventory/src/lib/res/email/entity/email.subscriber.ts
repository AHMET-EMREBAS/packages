import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Email } from './email.entity';

@EventSubscriber()
export class EmailSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Email> {
    return Email;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
