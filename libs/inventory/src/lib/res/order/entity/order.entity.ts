import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { Customer } from '../../customer';
import { ShippingAddress } from '../../shipping-address';

@Entity()
export class Order extends BaseEntity {
  @Relation({ target: Customer, type: 'owner' })
  customer?: number;

  @Relation({ target: ShippingAddress, type: 'sub' })
  shippingAddress?: number;
}
