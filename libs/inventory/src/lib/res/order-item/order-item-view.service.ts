import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { OrderItemView } from './entity';

@Injectable()
export class OrderItemViewService extends ResourceViewService<OrderItemView> {
  constructor(
    @InjectRepository(OrderItemView) repo: Repository<OrderItemView>
  ) {
    super(repo);
  }
}
