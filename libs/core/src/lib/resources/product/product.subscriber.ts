import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';
import { ClassConstructor } from 'class-transformer';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Product> {
    return Product;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
