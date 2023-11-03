import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { ShippingAddress } from './entity';

@Injectable()
export class ShippingAddressService extends ResourceService<ShippingAddress> {
  constructor(
    @InjectRepository(ShippingAddress) repo: Repository<ShippingAddress>
  ) {
    super(repo);
  }
}
