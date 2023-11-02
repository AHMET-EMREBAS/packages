import { formatFiles, generateFiles, Tree, names } from '@nx/devkit';
import { join } from 'path';
import { DtoGeneratorSchema } from './schema';
import { projectRoot } from '../helpers';

export async function dtoGenerator(tree: Tree, options: DtoGeneratorSchema) {
  const { name, project } = options;
  const PROJECT_ROOT = projectRoot(project);

  generateFiles(tree, join(__dirname, 'files'), PROJECT_ROOT, {
    ...names(name),
  });
  await formatFiles(tree);
}

export default dtoGenerator;
