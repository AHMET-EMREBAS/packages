import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
} from 'typeorm';
import { Department } from './department.entity';
import { ClassConstructor } from 'class-transformer';

@EventSubscriber()
export class DepartmentSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Department> {
    return Department;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
