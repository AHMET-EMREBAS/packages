import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { SkillView } from './entity';

@Injectable()
export class SkillViewService extends ResourceViewService<SkillView> {
  constructor(@InjectRepository(SkillView) repo: Repository<SkillView>) {
    super(repo);
  }
}
