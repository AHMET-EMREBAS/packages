import { Repository } from 'typeorm';
import { ID } from '../entities';
import { QueryDto } from '../dtos';
import { NotFoundException } from '@nestjs/common';

export class ResourceViewService<T extends ID> {
  constructor(private readonly __repo: Repository<T>) {}

  findAll(query: QueryDto) {
    const { order, skip, take, withDeleted, search, findBy } = query;

    let where = {};

    if (search) {
      where = { ...where, ...search };
    }

    if (findBy) {
      where = { ...where, ...findBy };
    }

    return this.__repo.find({
      take,
      skip,
      order,
      where,
      withDeleted,
    });
  }

  async findOneById(id: number) {
    try {
      return await this.__repo.findOneByOrFail({ id } as any);
    } catch (err) {
      throw new NotFoundException(`Entity not found by ${id}`);
    }
  }
}
