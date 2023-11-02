import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { Product } from './product.entity';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<Product> {
    return Product;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
