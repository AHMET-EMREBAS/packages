import { readFileSync } from 'fs';
import { parse } from 'yaml';
import {
  ModelOptions,
  RelationOptions,
  pickColumnOptions,
  pickPropertyOptions,
  pickRelationOptoins,
  propertyType,
  relationType,
} from '@techbir/core';
import { join } from 'path';
import { kebabCase, uniq } from 'lodash';

export function readModel(project: string, modelName: string): ModelOptions {
  const content = readFileSync(
    join(`ssot/projects/${project}/models/${modelName}.yaml`)
  ).toString();

  return parse(content) as ModelOptions;
}

function stringify(obj: any): string {
  const result = Object.entries(obj)
    .filter(([key, value]) => {
      return value != undefined;
    })
    .map(([key, value]) => {
      if (key === 'target') {
        return `${key}:${value}`;
      }

      if (typeof value === 'string') {
        return `${key}:'${value}'`;
      }

      return `${key}:${value}`;
    })
    ?.join(',');

  return `{ ${result} }`;
}

function relationAsProperty(name: string, options: RelationOptions) {
  if (options.type === 'owner') {
    return `
    @Property({type:'number', required:true , minimum:1 })
    ${name}!:number;
  `;
  } else if (options.type === 'sub') {
    return `
    @Property({type:'number', minimum:1 })
    ${name}?:number;
  `;
  } else if (options.type === 'subs') {
    return `
    @Property({type:'object', target:IDDto, isArray:true,  minimum:1 })
    ${name}?:IDDto[];
  `;
  }
}

export function printProperties(options: ModelOptions): string {
  const properties = Object.entries(options.properties || {})
    .map(([key, value]) => {
      if (options.required?.includes(key)) {
        value.required = true;
      }
      return ` 
      @Property(${stringify(pickPropertyOptions(value))})
      ${key}${options.required ? '!' : '?'}:${propertyType(value)};
    `;
    })
    ?.join('\n');

  const relations = Object.entries(options.relations || {})
    .map(([key, value]) => {
      return relationAsProperty(key, value);
    })
    ?.join('\n');

  return [properties, relations]?.join('\n');
}

export function printColumns(options: ModelOptions): string {
  const columns = Object.entries(options.properties || {})
    .map(([key, value]) => {
      if (options.required.includes(key)) {
        value.required = true;
      }
      if (options.uniques?.includes(key)) {
        value.unique = true;
      }
      return ` 
    @Column(${stringify(pickColumnOptions(value))})
    ${key}?:${propertyType(value)};
    `;
    })
    ?.join('\n');

  const relations = Object.entries(options.relations || {})
    .map(([key, value]) => {
      return `
      @Relation(${stringify(pickRelationOptoins(value))})
      ${key}?:${relationType(value)};
    `;
    })
    ?.join('\n');

  return [columns, relations]?.join('\n');
}

export function relationTargets(options: ModelOptions) {
  const targets = Object.values(options.relations || {})
    .filter((e) => e !== undefined)
    .map((value) => {
      return `${value.target}`;
    });
  return uniq(targets).join(', ');
}

export function relationTargetsImports(
  options: ModelOptions,
  from: '../' | '../../'
) {
  const imports = Object.values(options.relations || {})
    .filter((e) => e !== undefined)
    .map((value) => {
      return `import {${value.target}} from '${from}${kebabCase(
        value.target
      )}'`;
    });
  return uniq(imports).join('\n');
}
