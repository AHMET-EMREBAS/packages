import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { ProfileImage } from './profile-image.entity';

@EventSubscriber()
export class ProfileImageSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<ProfileImage> {
    return ProfileImage;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
