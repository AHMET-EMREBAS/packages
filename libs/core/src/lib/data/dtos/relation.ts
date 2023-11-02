import { Dto, Property } from "../../decorators";


@Dto()
export class RelationDto {
  @Property({ type: 'integer', required: true, minimum: 1 }) id!: number;

  @Property({ type: 'string', required: true, minLength: 3, maxLength: 30 })
  relationName!: string;

  @Property({ type: 'integer', required: true, minimum: 1 })
  relationId!: number;
}

@Dto()
export class UnsetRelationDto {
  @Property({ type: 'integer', required: true, minimum: 1 }) id!: number;

  @Property({ type: 'string', required: true, minLength: 3, maxLength: 30 })
  relationName!: string;
}
