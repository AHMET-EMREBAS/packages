import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Experience } from './experience.entity';

@EventSubscriber()
export class ExperienceSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Experience> {
    return Experience;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
