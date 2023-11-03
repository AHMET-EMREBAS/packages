import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Department } from './department.entity';

@EventSubscriber()
export class DepartmentSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Department> {
    return Department;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
