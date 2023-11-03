import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { Address } from './entity';

@Injectable()
export class AddressService extends ResourceService<Address> {
  constructor(@InjectRepository(Address) repo: Repository<Address>) {
    super(repo);
  }
}
