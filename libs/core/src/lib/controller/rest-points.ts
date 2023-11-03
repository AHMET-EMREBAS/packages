import {
  Delete as __Delete,
  Get as __Get,
  Post as __Post,
  Put,
  Controller as __Controller,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import {
  CombineClassDecorators,
  CombineMethodDecorators,
} from '@techbir/common';
import { ACCESS_TOKEN, ReadPermission, WritePermission } from './set-metadata';
import { DeleteResultDto, UpdateResultDto } from '../data';
import { ResourceMetadata } from './metadata';
import { ClassConstructor } from 'class-transformer';
import { kebabCase } from 'lodash';

export function Controller(entityName: string): ClassDecorator {
  const path = kebabCase(entityName);
  return CombineClassDecorators(
    ApiBearerAuth(ACCESS_TOKEN),
    ApiTags(entityName + 'Controller'),
    __Controller(path)
  );
}

export class Rest {
  private readonly readDto: ClassConstructor<any>;
  private readonly entityName: string;

  constructor(private readonly mt: ResourceMetadata) {
    this.readDto = mt.ReadDto;
    this.entityName = mt.entityName;
  }

  /**
   * Get /name
   * @returns
   */
  Get() {
    return CombineMethodDecorators(
      __Get(),
      ReadPermission(this.mt.entityName),
      ApiOperation({ summary: 'Get all items' }),
      ApiOkResponse({ type: this.readDto, isArray: true })
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
      ApiOperation({ summary: 'Get one item by id' }),
      ApiOkResponse({ type: this.readDto })
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
      ApiOperation({ summary: 'Save one item' }),
      ApiCreatedResponse({ type: this.readDto })
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
      ApiOperation({ summary: 'Update one by id' }),
      ApiOkResponse({ type: UpdateResultDto })
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
      ApiOperation({ summary: 'Delete one item by id' }),
      ApiOkResponse({ type: DeleteResultDto })
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
