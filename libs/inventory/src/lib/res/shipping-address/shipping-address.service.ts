import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { ShippingAddress } from './entity';
import { ShippingAddressUniqueFields } from './shipping-address.meta';

@Injectable()
export class ShippingAddressService extends ResourceService<ShippingAddress> {
  constructor(
    @InjectRepository(ShippingAddress) repo: Repository<ShippingAddress>
  ) {
    super(repo, ShippingAddressUniqueFields);
  }
}
