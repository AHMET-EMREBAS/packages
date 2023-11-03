import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { OrderItem } from './entity';

@Injectable()
export class OrderItemService extends ResourceService<OrderItem> {
  constructor(@InjectRepository(OrderItem) repo: Repository<OrderItem>) {
    super(repo);
  }
}
