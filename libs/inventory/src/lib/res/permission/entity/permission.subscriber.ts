import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Permission } from './permission.entity';

@EventSubscriber()
export class PermissionSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Permission> {
    return Permission;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
