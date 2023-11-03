import { ILike, Repository } from 'typeorm';
import { ID } from '../entities';
import { QueryDto, RelationDto, UnsetRelationDto } from './../dtos';
import {
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Logger } from '../../log';

export const RESOURCE_REPO_TOKEN = 'RESOURCE_REPO_TOKEN';
export const RESOURCE_VIEW_REPO_TOKEN = 'RESOURCE_VIEW_REPO_TOKEN';
export const RESOURCE_UNQIUE_FEILDS_TOKEN = 'RESOURCE_UNQIUE_FEILDS_TOKEN';

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
      throw new UnprocessableEntityException(
        `The entity does not have named relation ${relationName}!`
      );
    }
  }

  private async uniqueCheck(body: T) {
    if (this.__uniqueFields?.length > 0) {
      for (const field of this.__uniqueFields) {
        const found = await this.__repo.findOne({
          [field]: ILike(body[field]),
        });

        if (found) {
          throw new UnauthorizedException([
            `${field.toString()} must be unique!`,
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
