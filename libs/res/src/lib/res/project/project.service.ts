import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Project } from './entity';

@Injectable()
export class ProjectService extends ResourceService<Project> {
  constructor(@InjectRepository(Project) repo: Repository<Project>) {
    super(repo);
  }
}
