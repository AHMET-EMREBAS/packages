import { Injectable } from '@nestjs/common';
import { ResourceService } from '@techbir/typeorm';
import { Category } from './entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService extends ResourceService<Category> {
  constructor(@InjectRepository(Category) repo: Repository<Category>) {
    super(repo);
  }
}
