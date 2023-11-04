import { ClassType, ICode } from '../interface';

export class CommonClassOptions {
  classType!: ClassType;
  className!: string;
  comment?: string;
  properties!: ICode[];
}

export class InterfaceOptions extends CommonClassOptions {}

export class ClassOptions extends CommonClassOptions {}

export class TypeOptions extends CommonClassOptions {}
