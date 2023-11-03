import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Feature } from './feature.entity';

@EventSubscriber()
export class FeatureSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Feature> {
    return Feature;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
