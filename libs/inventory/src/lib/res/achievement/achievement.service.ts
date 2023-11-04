import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Achievement } from './entity';
import { AchievementUniqueFields } from './achievement.meta';

@Injectable()
export class AchievementService extends ResourceService<Achievement> {
  constructor(@InjectRepository(Achievement) repo: Repository<Achievement>) {
    super(repo, AchievementUniqueFields);
  }
}
