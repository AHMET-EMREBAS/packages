import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Email } from './entity';
import { EmailUniqueFields } from './email.meta';

@Injectable()
export class EmailService extends ResourceService<Email> {
  constructor(@InjectRepository(Email) repo: Repository<Email>) {
    super(repo, EmailUniqueFields);
  }
}
