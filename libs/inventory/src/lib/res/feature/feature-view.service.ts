import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { FeatureView } from './entity';

@Injectable()
export class FeatureViewService extends ResourceViewService<FeatureView> {
  constructor(@InjectRepository(FeatureView) repo: Repository<FeatureView>) {
    super(repo);
  }
}
