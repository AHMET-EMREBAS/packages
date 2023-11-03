import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { StoreView } from './entity';

@Injectable()
export class StoreViewService extends ResourceViewService<StoreView> {
  constructor(@InjectRepository(StoreView) repo: Repository<StoreView>) {
    super(repo);
  }
}
