import { ICode } from './code';

export interface ICodeProperty<ICodePropertyOptions> extends ICode {
  options: ICodePropertyOptions;
  decorator(): string;
  defaultValue(): string;
  propertyName(): string;
  requiredMark(): string;
  propertyType(): string;
  code(): string;
}
