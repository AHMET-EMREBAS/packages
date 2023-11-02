import {
  Delete as __Delete,
  Get as __Get,
  Post as __Post,
  Put,
  Controller as __Controller,
  Param,
  ParseIntPipe,
  SetMetadata,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  CombineClassDecorators,
  CombineMethodDecorators,
} from '@techbir/utils';
import { DtoValidationPipe } from '../base';

export function Controller(path: string): ClassDecorator {
  return CombineClassDecorators(
    ApiBearerAuth('access-token'),
    ApiTags(),
    __Controller(path)
  );
}

export const PERMISSION = 'PERMISSION';

export function Permission(entityName: string, event: 'Read' | 'Write') {
  return SetMetadata(PERMISSION, `${event}:${entityName}`);
}

export function ReadPermission(entityName: string) {
  return Permission(entityName, 'Read');
}

export function WritePermission(entityName: string) {
  return Permission(entityName, 'Write');
}

export class Rest {
  constructor(private readonly entityName: string) {}
  /**
   * Get /name
   * @returns
   */
  Get() {
    return CombineMethodDecorators(
      __Get(),
      ReadPermission(this.entityName),
      ApiOperation({ summary: 'Get all items' })
    );
  }

  /**
   * Get one by id /name/:id
   * @returns
   */
  GetById() {
    return CombineMethodDecorators(
      __Get(':id'),
      ReadPermission(this.entityName),
      ApiOperation({ summary: 'Get one item by id' })
    );
  }

  /**
   * Save one /name
   * @returns
   */
  Post() {
    return CombineMethodDecorators(
      __Post(),
      WritePermission(this.entityName),
      ApiOperation({ summary: 'Save one item' })
    );
  }

  /**
   * Update one /name/:id
   * @returns
   */
  Update() {
    return CombineMethodDecorators(
      Put(':id'),
      WritePermission(this.entityName),
      ApiOperation({ summary: 'Update one by id' })
    );
  }

  /**
   * Delete by id /name/:id
   * @returns
   */
  Delete() {
    return CombineMethodDecorators(
      __Delete(':id'),
      WritePermission(this.entityName),
      ApiOperation({ summary: 'Delete one item by id' })
    );
  }

  /**
   * Set to-one relation /name/:id/:rn/:rid
   * @returns
   */
  Set() {
    return CombineMethodDecorators(
      __Post(':id/:rn/:rid'),
      WritePermission(this.entityName),
      ApiOperation({
        summary:
          'Set man-to-one or one-to-one relation value by entity id and relation id',
      })
    );
  }

  /**
   * Unset to-one relation /name/:id/:rn
   * @returns
   */
  Unset() {
    return CombineMethodDecorators(
      __Delete(':id/:rn'),
      WritePermission(this.entityName),
      ApiOperation({
        summary:
          'Unset man-to-one or one-to-one relation value from the entity by id',
      })
    );
  }

  /**
   * Add to-many relation /name/:id/:rn/:rid
   * @returns
   */
  Add() {
    return CombineMethodDecorators(
      Put(':id/:rn/:rid'),
      WritePermission(this.entityName),
      ApiOperation({
        summary:
          'Add many-to-many or one-to-many relation value by entity id and relation id',
      })
    );
  }

  /**
   * Remove to-many relation /name/:id/:rn/:rid
   * @returns
   */
  Remove() {
    return CombineMethodDecorators(
      __Delete(':id/:rn/:rid'),
      WritePermission(this.entityName),
      ApiOperation({
        summary:
          'Remove many-to-many or one-to-many relation value by entity id and relation id',
      })
    );
  }
}
/**
 * Id Param
 * @returns
 */
export function ParamId() {
  return Param('id', ParseIntPipe);
}

/**
 * Relation name param
 * @returns
 */
export function ParamRelationName() {
  return Param('rn');
}

/**
 * Relation Id Param
 * @returns
 */
export function ParamRelationId() {
  return Param('rid', ParseIntPipe);
}
