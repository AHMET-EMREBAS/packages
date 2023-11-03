import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Role } from './role.entity';

@EventSubscriber()
export class RoleSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Role> {
    return Role;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
