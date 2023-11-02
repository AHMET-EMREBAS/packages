import { formatFiles, generateFiles, Tree, names } from '@nx/devkit';
import { InitGeneratorSchema } from './schema';
import { join } from 'path';

export async function initGenerator(tree: Tree, options: InitGeneratorSchema) {
  generateFiles(tree, join(__dirname, 'files'), '', {
    ...names(options.name),
  });
  await formatFiles(tree);
}

export default initGenerator;
