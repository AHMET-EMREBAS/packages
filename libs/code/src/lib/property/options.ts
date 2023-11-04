import { ClassType } from '../interface';

export class CommonPropertyOptions<TPropertyType> {
  propertyName!: string;
  type!: TPropertyType;
  isArray?: boolean;
  required?: boolean;
  classType!: ClassType;
  comment?: string;
}

export class InterfacePropertyOptions<
  TPropertyType
> extends CommonPropertyOptions<TPropertyType> {}

export class TypePropertyOptions<
  TPropertyType
> extends InterfacePropertyOptions<TPropertyType> {}

export class ClassPropertyOptions<
  TPropertyType,
  TDefaultValueType
> extends InterfacePropertyOptions<TPropertyType> {
  defaultValue?: TDefaultValueType;
}

export class DecoratedPropertyOptions<
  TPropertyType,
  TDefaultValueType
> extends ClassPropertyOptions<TPropertyType, TDefaultValueType> {}
