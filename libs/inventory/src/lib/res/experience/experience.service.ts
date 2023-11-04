import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Experience } from './entity';
import { ExperienceUniqueFields } from './experience.meta';

@Injectable()
export class ExperienceService extends ResourceService<Experience> {
  constructor(@InjectRepository(Experience) repo: Repository<Experience>) {
    super(repo, ExperienceUniqueFields);
  }
}
