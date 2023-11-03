import { Tree, formatFiles, generateFiles, names } from '@nx/devkit';
import { join } from 'path';
import {
  printProperties,
  printColumns,
  readModel,
  relationTargetsImports,
  relationTargets,
} from './model-printer';

export function projectRoot(projectName: string): string {
  return join('libs', projectName, 'src', 'lib', 'res');
}

export async function resourceGenerator(
  tree: Tree,
  options: { name: string; project: string }
) {
  const { name, project } = options;
  const PROJECT_ROOT = projectRoot(project);

  const modelOptions = readModel(project, name);

  generateFiles(tree, join(__dirname, 'files'), PROJECT_ROOT, {
    ...names(name),
    properties: printProperties(modelOptions),
    columns: printColumns(modelOptions),
    uniques: modelOptions.uniques?.join(', ') || '',
    searchables: modelOptions.searchables?.join(', ') || '',
    viewSearchables: modelOptions.viewSearchables?.join(', ') || '',
    imports: relationTargetsImports(modelOptions),
    targets: relationTargets(modelOptions),
  });
  await formatFiles(tree);
}

export default resourceGenerator;
