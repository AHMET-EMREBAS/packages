import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { AddressView } from './entity';

@Injectable()
export class AddressViewService extends ResourceViewService<AddressView> {
  constructor(@InjectRepository(AddressView) repo: Repository<AddressView>) {
    super(repo);
  }
}
