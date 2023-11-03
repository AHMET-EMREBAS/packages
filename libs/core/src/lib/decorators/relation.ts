import { CombinePropertyDecorators } from '@techbir/common';
import { pick } from 'lodash';
import { JoinColumn, ManyToMany, ManyToOne } from 'typeorm';

export type RelationType = 'sub' | 'subs' | 'owner';

export type RelationOptions = {
  type: RelationType;
  target: any;
};

export function relationType(options: RelationOptions) {
  const { type } = options;

  if (type === 'owner') {
    return 'number';
  } else if (type === 'sub') {
    return 'number';
  } else {
    return 'IDDto[]';
  }
}

export function pickRelationOptoins(options: any) {
  return pick<RelationOptions, keyof RelationOptions>(
    options,
    'target',
    'type'
  );
}

export function Relation({ type, target }: RelationOptions) {
  if (type == 'sub') {
    return CombinePropertyDecorators(
      ManyToOne<any>(
        () => target,
        (t) => t.id,
        { eager: true, nullable: true }
      ),
      JoinColumn()
    );
  }

  if (type == 'subs') {
    return CombinePropertyDecorators(
      ManyToMany<any>(
        () => target,
        (t) => t.id,
        { eager: true, nullable: true }
      ),
      JoinColumn()
    );
  }

  if (type === 'owner') {
    return CombinePropertyDecorators(
      ManyToOne<any>(
        () => target,
        (t) => t.id,
        { onDelete: 'CASCADE' }
      ),
      JoinColumn()
    );
  }

  return CombinePropertyDecorators();
}
