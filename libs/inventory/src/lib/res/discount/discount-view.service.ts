import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { DiscountView } from './entity';

@Injectable()
export class DiscountViewService extends ResourceViewService<DiscountView> {
  constructor(@InjectRepository(DiscountView) repo: Repository<DiscountView>) {
    super(repo);
  }
}
