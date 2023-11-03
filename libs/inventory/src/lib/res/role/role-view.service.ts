import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { RoleView } from './entity';

@Injectable()
export class RoleViewService extends ResourceViewService<RoleView> {
  constructor(@InjectRepository(RoleView) repo: Repository<RoleView>) {
    super(repo);
  }
}
