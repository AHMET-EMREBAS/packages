import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { PriceView } from './entity';

@Injectable()
export class PriceViewService extends ResourceViewService<PriceView> {
  constructor(@InjectRepository(PriceView) repo: Repository<PriceView>) {
    super(repo);
  }
}
