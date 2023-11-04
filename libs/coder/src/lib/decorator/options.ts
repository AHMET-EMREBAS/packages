export class DecoratorOptions<TOptions> {
  decoratorName: string;
  stringifyOptions: (value: TOptions) => string;
  options: TOptions;
}
