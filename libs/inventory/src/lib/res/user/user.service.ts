import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { User } from './entity';

@Injectable()
export class UserService extends ResourceService<User> {
  constructor(@InjectRepository(User) repo: Repository<User>) {
    super(repo);
  }
}
