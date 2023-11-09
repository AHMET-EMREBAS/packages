import { ILike, Repository } from 'typeorm';
import { ID } from '../entities';
import { QueryDto, RelationDto, UnsetRelationDto } from './../dtos';
import { NotFoundException } from '@nestjs/common';
import { Logger } from '../../log';
import { BadInputEntityException } from '../../validation';

export class ResourceService<T extends ID> {
  logger = new Logger(this.__repo.metadata.name);

  constructor(
    private readonly __repo: Repository<T>,
    private readonly __uniqueFields?: (keyof T)[]
  ) {}

  private async hasRelationOrThrow(relationName: string) {
    const hasRelation = !!this.__repo.metadata.relations.find(
      (e) => e.propertyName == relationName
    );

    if (!hasRelation) {
      throw new BadInputEntityException([
        {
          property: relationName,
          constraints: {
            notFound: `${relationName} is not found in the entity`,
          },
        },
      ]);
    }
  }

  private async uniqueCheck(body: T) {
    if (this.__uniqueFields?.length > 0) {
      for (const field of this.__uniqueFields) {
        const found = await this.__repo.findOne({
          where: {
            [field]: ILike(body[field]),
          } as any,
        });

        if (found) {
          throw new BadInputEntityException([
            {
              property: field.toString(),
              constraints: {
                unique: `${field.toString()} must be unique`,
              },
            },
          ]);
        }
      }
    }

    return;
  }

  private log(name: string, data: any) {
    this.logger.log(`${name}: `);
    console.table(data);
  }

  async findOneByIdOrThrow(id: number) {
    const found = await this.__repo.findOneBy({ id } as any);
    if (!found) {
      throw new NotFoundException(`Entity with id ${id} does not exist!`);
    }

    return found;
  }

  count() {
    return this.__repo.count();
  }

  async meta() {
    const count = await this.__repo.count();
    return { count };
  }

  findAll(query: QueryDto) {
    this.log('findAll', query);
    const { order, skip, take, withDeleted, search } = query;
    return this.__repo.find({ take, skip, order, where: search, withDeleted });
  }

  async findOneById(id: number) {
    this.log('findOneBYId', { id });
    try {
      return await this.__repo.findOneByOrFail({ id } as any);
    } catch (err) {
      throw new NotFoundException(`Entity not found by ${id}`);
    }
  }

  async save(body: any) {
    this.log('save', body);
    await this.uniqueCheck(body);
    return await this.__repo.save(body);
  }

  async update(id: number, body: any) {
    this.log('Update', body);
    await this.findOneByIdOrThrow(id);
    await this.uniqueCheck(body);
    return await this.__repo.update(id, body);
  }

  async hardDelete(id: number) {
    this.log('Hard Delete', { id });
    await this.findOneByIdOrThrow(id);
    return await this.__repo.delete(id);
  }

  async delete(id: number) {
    this.log('Hard Delete', { id });
    await this.findOneByIdOrThrow(id);
    return await this.__repo.softDelete(id);
  }

  /**
   * Setting relation (*-to-one)
   * @param id
   * @param relationName
   * @param relationId
   * @returns
   */
  async setRelation(options: RelationDto) {
    this.log('setRelation', options);
    const { id, relationName, relationId } = options;
    await this.findOneByIdOrThrow(id);
    await this.findOneByIdOrThrow(relationId);
    await this.hasRelationOrThrow(relationName);
    const result = await this.__repo
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .set(relationId);

    return result;
  }

  /**
   * Unsetting relation (*-to-one)
   * @param id
   * @param relationName
   * @returns
   */
  async unsetRelation(options: UnsetRelationDto) {
    this.log('unsetRelation', options);
    const { id, relationName } = options;
    await this.findOneByIdOrThrow(id);
    await this.hasRelationOrThrow(relationName);

    return await this.__repo
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .set(null);
  }

  /**
   * Adding relation (*-to-many)
   * @param id
   * @param relationName
   * @param relationId
   * @returns
   */
  async addRelation(options: RelationDto) {
    this.log('addRelation', options);
    const { id, relationName, relationId } = options;
    await this.findOneByIdOrThrow(id);
    await this.findOneByIdOrThrow(relationId);
    await this.hasRelationOrThrow(relationName);

    return await this.__repo
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .add(relationId);
  }

  /**
   * Removing relation (*-to-many)
   * @param id
   * @param relationName
   * @param relationId
   * @returns
   */
  async removeRelation(options: RelationDto) {
    this.log('addRelation', options);
    const { id, relationName, relationId } = options;
    await this.findOneByIdOrThrow(id);
    await this.findOneByIdOrThrow(relationId);
    await this.hasRelationOrThrow(relationName);

    return this.__repo
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .remove(relationId);
  }
}
