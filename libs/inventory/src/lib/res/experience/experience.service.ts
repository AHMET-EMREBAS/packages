import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Experience } from './entity';

@Injectable()
export class ExperienceService extends ResourceService<Experience> {
  constructor(@InjectRepository(Experience) repo: Repository<Experience>) {
    super(repo);
  }
}
