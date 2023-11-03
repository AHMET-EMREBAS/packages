import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { PermissionView } from './entity';

@Injectable()
export class PermissionViewService extends ResourceViewService<PermissionView> {
  constructor(
    @InjectRepository(PermissionView) repo: Repository<PermissionView>
  ) {
    super(repo);
  }
}
