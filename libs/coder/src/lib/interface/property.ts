import { ICode } from './code';

export interface ICodeProperty<ICodePropertyOptions> extends ICode {
  options: ICodePropertyOptions;
  comment(): string;
  decorator(): string;
  defaultValue(): string;
  propertyName(): string;
  requiredMark(): string;
  propertyType(): string;
  code(): string;
}
