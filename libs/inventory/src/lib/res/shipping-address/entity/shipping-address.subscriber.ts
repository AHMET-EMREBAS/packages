import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  ClassConstructor,
} from '../imports';
import { ShippingAddress } from './shipping-address.entity';

@EventSubscriber()
export class ShippingAddressSubscriber implements EntitySubscriberInterface {
  listenTo(): ClassConstructor<ShippingAddress> {
    return ShippingAddress;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('Inserted ', event.entity);
  }
}
