import { Import } from './import';

describe('Imports', () => {
  it('should print expected', () => {
    const code = new Import({
      items: ['Category', 'Department', 'Category'],
      packagePath: '@techbir/res',
    }).code();

    expect(code).toBe(`import { Category, Department } from '@techbir/res'`);
  });
});
