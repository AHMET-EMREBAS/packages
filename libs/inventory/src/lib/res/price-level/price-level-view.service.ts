import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { PriceLevelView } from './entity';

@Injectable()
export class PriceLevelViewService extends ResourceViewService<PriceLevelView> {
  constructor(
    @InjectRepository(PriceLevelView) repo: Repository<PriceLevelView>
  ) {
    super(repo);
  }
}
