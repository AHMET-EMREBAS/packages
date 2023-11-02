import { Repository } from 'typeorm';
import { IDEntity } from './id.entity';
import { QueryDto } from './base-query.dto';
import { RelationDto, UnsetRelationDto } from './relation-param.dto';

export class ResourceService<T extends IDEntity> {
  constructor(private readonly __repo: Repository<T>) {}

  findAll(query: QueryDto) {
    const { order, skip, take, withDeleted, search } = query;
    return this.__repo.find({ take, skip, order, where: search, withDeleted });
  }

  findOneById(id: number) {
    return this.__repo.findOneBy({ id } as any);
  }

  save(body: any) {
    return this.__repo.save(body);
  }

  update(id: number, body: any) {
    return this.__repo.update(id, body);
  }

  delete(id: number) {
    return this.__repo.delete(id);
  }

  /**
   * Setting relation (*-to-one)
   * @param id
   * @param relationName
   * @param relationId
   * @returns
   */
  setRelation(options: RelationDto) {
    const { id, relationName, relationId } = options;
    return this.__repo
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .set(relationId);
  }

  /**
   * Unsetting relation (*-to-one)
   * @param id
   * @param relationName
   * @returns
   */
  unsetRelation({ id, relationName }: UnsetRelationDto) {
    return this.__repo
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
  addRelation({ id, relationId, relationName }: RelationDto) {
    return this.__repo
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
  removeRelation({ id, relationId, relationName }: RelationDto) {
    return this.__repo
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .remove(relationId);
  }
}
