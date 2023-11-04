import {
  Injectable,
  ResourceService,
  Repository,
  InjectRepository,
} from './imports';
import { SocialMedia } from './entity';
import { SocialMediaUniqueFields } from './social-media.meta';

@Injectable()
export class SocialMediaService extends ResourceService<SocialMedia> {
  constructor(@InjectRepository(SocialMedia) repo: Repository<SocialMedia>) {
    super(repo, SocialMediaUniqueFields);
  }
}
