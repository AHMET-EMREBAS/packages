export type InputOptions = {
  /**
   * Entity id or object property name
   */
  id: any;
  label: any;
  icon?: string;
  value?: any;
  children?: InputOptions[];
};
