import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { EmailView } from './entity';

@Injectable()
export class EmailViewService extends ResourceViewService<EmailView> {
  constructor(@InjectRepository(EmailView) repo: Repository<EmailView>) {
    super(repo);
  }
}
