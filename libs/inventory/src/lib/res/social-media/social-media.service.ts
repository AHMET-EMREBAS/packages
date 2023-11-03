import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { SocialMedia } from './entity';

@Injectable()
export class SocialMediaService extends ResourceService<SocialMedia> {
  constructor(@InjectRepository(SocialMedia) repo: Repository<SocialMedia>) {
    super(repo);
  }
}
