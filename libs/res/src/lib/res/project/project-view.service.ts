import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { ProjectView } from './entity';

@Injectable()
export class ProjectViewService extends ResourceViewService<ProjectView> {
  constructor(@InjectRepository(ProjectView) repo: Repository<ProjectView>) {
    super(repo);
  }
}
