import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Project } from './project.entity';

@EventSubscriber()
export class ProjectSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Project> {
    return Project;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
