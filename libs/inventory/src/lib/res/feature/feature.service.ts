import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Feature } from './entity';

@Injectable()
export class FeatureService extends ResourceService<Feature> {
  constructor(@InjectRepository(Feature) repo: Repository<Feature>) {
    super(repo);
  }
}
