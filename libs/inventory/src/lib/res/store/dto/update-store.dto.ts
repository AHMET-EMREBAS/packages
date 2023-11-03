import { PartialType, Dto } from '../imports';
import { CreateStoreDto } from './create-store.dto';

@Dto()
export class UpdateStoreDto extends PartialType(CreateStoreDto) {}
