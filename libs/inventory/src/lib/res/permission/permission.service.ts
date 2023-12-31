import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Permission } from './entity';
import { PermissionUniqueFields } from './permission.meta';

@Injectable()
export class PermissionService extends ResourceService<Permission> {
  constructor(@InjectRepository(Permission) repo: Repository<Permission>) {
    super(repo, PermissionUniqueFields);
  }
}
