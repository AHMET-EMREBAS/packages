import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { QuantityView } from './entity';

@Injectable()
export class QuantityViewService extends ResourceViewService<QuantityView> {
  constructor(@InjectRepository(QuantityView) repo: Repository<QuantityView>) {
    super(repo);
  }
}
