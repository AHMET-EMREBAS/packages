import { ICode } from './code';

export interface ICodeClass<ICodeClassOptions> extends ICode {
  options: ICodeClassOptions;
  import(): string;
  className(): string;
  classType(): string;
  decorator(): string;
  comment(): string;
  extends(): string;
  impements(): string;
  construct(): string;
  property(): string;
}
