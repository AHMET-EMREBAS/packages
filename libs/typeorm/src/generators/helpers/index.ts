import {
  Tree,
  formatFiles,
  generateFiles as __generateFiles,
  names,
} from '@nx/devkit';
import { join } from 'path';

/**
 * Target project directory
 * @param projectName
 * @returns
 */
export function projectRoot(projectName: string): string {
  return join('libs', projectName, 'src', 'lib', 'resources');
}

export async function generateFiles(
  tree: Tree,
  options: { name: string; project: string }
) {
  const { name, project } = options;
  const PROJECT_ROOT = projectRoot(project);

  __generateFiles(tree, join(__dirname, 'files'), PROJECT_ROOT, {
    ...names(name),
  });
  await formatFiles(tree);
}
