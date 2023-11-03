import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Discount } from './entity';

@Injectable()
export class DiscountService extends ResourceService<Discount> {
  constructor(@InjectRepository(Discount) repo: Repository<Discount>) {
    super(repo);
  }
}
