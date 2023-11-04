import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Role } from './entity';
import { RoleUniqueFields } from './role.meta';

@Injectable()
export class RoleService extends ResourceService<Role> {
  constructor(@InjectRepository(Role) repo: Repository<Role>) {
    super(repo, RoleUniqueFields);
  }
}
