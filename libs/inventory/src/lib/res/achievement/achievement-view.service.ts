import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { AchievementView } from './entity';

@Injectable()
export class AchievementViewService extends ResourceViewService<AchievementView> {
  constructor(
    @InjectRepository(AchievementView) repo: Repository<AchievementView>
  ) {
    super(repo);
  }
}
