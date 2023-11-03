import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { SkuView } from './entity';

@Injectable()
export class SkuViewService extends ResourceViewService<SkuView> {
  constructor(@InjectRepository(SkuView) repo: Repository<SkuView>) {
    super(repo);
  }
}
