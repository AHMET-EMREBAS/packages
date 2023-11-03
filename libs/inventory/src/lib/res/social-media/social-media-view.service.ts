import {
  Injectable,
  Repository,
  InjectRepository,
  ResourceViewService,
} from './imports';
import { SocialMediaView } from './entity';

@Injectable()
export class SocialMediaViewService extends ResourceViewService<SocialMediaView> {
  constructor(
    @InjectRepository(SocialMediaView) repo: Repository<SocialMediaView>
  ) {
    super(repo);
  }
}
