import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
} from 'typeorm';
import { Category } from './category.entity';
import { ClassConstructor } from 'class-transformer';

@EventSubscriber()
export class CategorySubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Category> {
    return Category;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
