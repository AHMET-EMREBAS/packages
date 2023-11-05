import { Provider } from '@angular/core';

export const TABLE_COLUMNS_TOKEN = 'TABLE_COLUMNS_TOKEN';


export type TableColumn = {
  name: string;
  label?: string;
  icon?: string;
  /**
   * Get column value from item
   * @param value
   * @returns
   */
  mapFrom?: (value: any) => any;
};

export function provideTableColumns(tableColumns: TableColumn[]): Provider {
  return {
    provide: TABLE_COLUMNS_TOKEN,
    useValue: tableColumns,
  };
}
