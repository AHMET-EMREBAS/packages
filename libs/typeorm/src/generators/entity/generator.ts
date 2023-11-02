import { formatFiles, generateFiles, Tree, names } from '@nx/devkit';
import * as path from 'path';
import { EntityGeneratorSchema } from './schema';
import { projectRoot } from '../helpers';

export async function entityGenerator(
  tree: Tree,
  options: EntityGeneratorSchema
) {
  const { name, project } = options;
  const PROJECT_ROOT = projectRoot(project);

  generateFiles(tree, path.join(__dirname, 'files'), PROJECT_ROOT, {
    ...names(name),
  });
  await formatFiles(tree);
}

export default entityGenerator;
