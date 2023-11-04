import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { OrderItem } from './entity';
import { OrderItemUniqueFields } from './order-item.meta';

@Injectable()
export class OrderItemService extends ResourceService<OrderItem> {
  constructor(@InjectRepository(OrderItem) repo: Repository<OrderItem>) {
    super(repo, OrderItemUniqueFields);
  }
}
