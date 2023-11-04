export class ImportOptions {
  /**
   * @ex class-validator, class-transformer, \@techbir/core, \@techbir/gen etc.
   */
  packagePath!: string;

  /**
   * What do you want to import from the package
   */
  items!: string[];
}
