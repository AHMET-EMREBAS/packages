import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { ExperienceView } from './entity';

@Injectable()
export class ExperienceViewService extends ResourceViewService<ExperienceView> {
  constructor(
    @InjectRepository(ExperienceView) repo: Repository<ExperienceView>
  ) {
    super(repo);
  }
}
