import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ACCESS_TOKEN } from '@techbir/core';
import { DataSource } from 'typeorm';

@ApiTags('MetaController')
@ApiBearerAuth(ACCESS_TOKEN)
@Controller('meta')
export class MetaController {
  constructor(private readonly dataSource: DataSource) {}

  @ApiOperation({ summary: 'Count of items' })
  @Get('count/:res')
  count(@Param('res') res: string) {
    return this.dataSource
      .getRepository(res)
      .count()
      .then((count) => ({ count }));
  }

  @ApiOperation({ summary: 'Unique fields' })
  @Get('uniques/:res')
  uniques(@Param('res') res: string) {
    return this.dataSource.getRepository(res).metadata.ownUniques.map((e) => {
      return e.columns[0].propertyName;
    });
  }

  @ApiOperation({ summary: 'Propery Types' })
  @Get('types/:res')
  textFields(@Param('res') res: string) {
    return this.dataSource
      .getRepository(res)
      .metadata.columns.map(
        ({ isPrimary, propertyName, type, relationMetadata }) => {
          return {
            isPrimary,
            propertyName,
            type,
            relation: relationMetadata
              ? {
                  type: relationMetadata.type,
                  target: relationMetadata.target['name'],
                }
              : undefined,
          };
        }
      );
  }

  @ApiOperation({ summary: 'Relation names' })
  @Get('relations/:res')
  relations(@Param('res') res: string) {
    return this.dataSource
      .getRepository(res)
      .metadata.relations.map(
        ({
          propertyName,
          relationType,
          onDelete,
          joinTableName,
          isEager,
          isLazy,
          isNullable,
        }) => ({
          relationType,
          joinTableName,
          propertyName,
          isEager,
          isLazy,
          isNullable,
          onDelete,
        })
      );
  }
}
