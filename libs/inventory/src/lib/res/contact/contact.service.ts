import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Contact } from './entity';
import { ContactUniqueFields } from './contact.meta';

@Injectable()
export class ContactService extends ResourceService<Contact> {
  constructor(@InjectRepository(Contact) repo: Repository<Contact>) {
    super(repo, ContactUniqueFields);
  }
}
