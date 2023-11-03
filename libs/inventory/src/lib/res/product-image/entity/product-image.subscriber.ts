import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { ProductImage } from './product-image.entity';

@EventSubscriber()
export class ProductImageSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<ProductImage> {
    return ProductImage;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
