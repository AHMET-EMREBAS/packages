import { Tree, formatFiles, generateFiles, names } from '@nx/devkit';
import { join } from 'path';

export function projectRoot(projectName: string): string {
  return join('libs', projectName, 'src', 'lib', 'res');
}

export async function resourceGenerator(
  tree: Tree,
  options: { name: string; project: string }
) {
  const { name, project } = options;
  const PROJECT_ROOT = projectRoot(project);

  generateFiles(tree, join(__dirname, 'files'), PROJECT_ROOT, {
    ...names(name),
  });
  await formatFiles(tree);
}

export default resourceGenerator;
