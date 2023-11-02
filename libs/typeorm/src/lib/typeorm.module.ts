import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ClassConstructor } from 'class-transformer';

export type SqliteModuleOptions = {
  entities: ClassConstructor<any>[];
  databaseName: string;
};

@Module({})
export class SqliteModule {
  private static options: TypeOrmModuleOptions = {
    type: 'better-sqlite3',
  };

  static register(options: SqliteModuleOptions): DynamicModule {
    const database = `./tmp/database/${options.databaseName}.sqlite`;
    return {
      module: SqliteModule,
      imports: [
        TypeOrmModule.forRoot({
          ...options,
          type: 'better-sqlite3',
          database,
        }),
      ],
    };
  }
}
