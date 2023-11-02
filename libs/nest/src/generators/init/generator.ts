import { formatFiles, Tree } from '@nx/devkit';
import { InitGeneratorSchema } from './schema';

export async function initGenerator(tree: Tree, options: InitGeneratorSchema) {
  await formatFiles(tree);
}

export default initGenerator;
