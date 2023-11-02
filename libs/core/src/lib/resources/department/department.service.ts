import { Injectable } from '@nestjs/common';
import { ResourceService } from '@techbir/typeorm';
import { Department } from './entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DepartmentService extends ResourceService<Department> {
  constructor(@InjectRepository(Department) repo: Repository<Department>) {
    super(repo);
  }
}
