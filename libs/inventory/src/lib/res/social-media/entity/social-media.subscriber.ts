import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { SocialMedia } from './social-media.entity';

@EventSubscriber()
export class SocialMediaSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<SocialMedia> {
    return SocialMedia;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
