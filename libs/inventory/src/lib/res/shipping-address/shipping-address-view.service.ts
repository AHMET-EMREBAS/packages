import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { ShippingAddressView } from './entity';

@Injectable()
export class ShippingAddressViewService extends ResourceViewService<ShippingAddressView> {
  constructor(
    @InjectRepository(ShippingAddressView) repo: Repository<ShippingAddressView>
  ) {
    super(repo);
  }
}
