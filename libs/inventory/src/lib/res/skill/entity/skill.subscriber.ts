import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Skill } from './skill.entity';

@EventSubscriber()
export class SkillSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Skill> {
    return Skill;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
