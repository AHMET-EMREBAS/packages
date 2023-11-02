import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Category } from './category.entity';

@EventSubscriber()
export class CategorySubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Category> {
    return Category;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
