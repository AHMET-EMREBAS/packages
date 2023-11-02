export type PropertyPrinterOptions = {
  name: string;
  type: string;
  required?: boolean;
  isArray?: boolean;
  decorator?: string;
};

export class PropertyPrinter<
  T extends Record<string, any> = Record<string, any>
> {
  constructor(
    protected readonly printerOptions: PropertyPrinterOptions,
    protected readonly propertyOptions: T
  ) {}

  propertyName() {
    return this.printerOptions.name;
  }

  type() {
    return this.printerOptions.type;
  }

  isRequired() {
    return this.printerOptions.required ? '!' : '?';
  }

  isArray() {
    return this.printerOptions.isArray ? '[]' : '';
  }

  mapOptions() {
    return this.propertyOptions;
  }

  stringOptions() {
    const objectString = Object.entries(this.propertyOptions)
      .map(([key, value]) => {
        if (typeof value === 'string') {
          return `${key}:'${value}'`;
        }
        return `${key}:${value}`;
      })
      .join(',');

    return `{ ${objectString} }`;
  }

  decorator(optionsAsString: string) {
    if (this.printerOptions.decorator) {
      return `@${this.printerOptions.decorator}(${optionsAsString})`;
    }
    return '';
  }

  defination() {
    return `${this.propertyName()}${this.isRequired()}:${this.type()}${this.isArray()}`;
  }

  print() {
    return `${this.decorator(this.stringOptions())}\n${this.defination()}`;
  }
}
