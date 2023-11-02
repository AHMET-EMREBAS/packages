import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { EntityGeneratorSchema } from './schema';

export async function entityGenerator(
  tree: Tree,
  options: EntityGeneratorSchema
) {
  // generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  console.log('Entity Generator');
  await formatFiles(tree);
}

export default entityGenerator;
