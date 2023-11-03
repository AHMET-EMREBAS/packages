import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Achievement } from './achievement.entity';

@EventSubscriber()
export class AchievementSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Achievement> {
    return Achievement;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
