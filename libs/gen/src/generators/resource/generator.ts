import { Tree, formatFiles, generateFiles, names } from '@nx/devkit';
import { join } from 'path';
import {
  printProperties,
  printColumns,
  readModel,
  relationTargetsImports,
  relationTargets,
  projectRoot,
  projectModuleImports,
} from './model-printer';

export async function resourceGenerator(
  tree: Tree,
  options: { name: string; project: string }
) {
  const { name, project } = options;
  const PROJECT_ROOT = projectRoot(project);

  const modelOptions = readModel(project, name);

  const { allModulesImport, moduleList } = projectModuleImports(project);
  generateFiles(tree, join(__dirname, 'files'), PROJECT_ROOT, {
    ...names(name),
    properties: printProperties(modelOptions),
    columns: printColumns(modelOptions),
    uniques: modelOptions.uniques?.join(', ') || '',
    searchables: modelOptions.searchables?.join(', ') || '',
    viewSearchables: modelOptions.viewSearchables?.join(', ') || '',
    imports: relationTargetsImports(modelOptions, '../../'),
    moduleImports: relationTargetsImports(modelOptions, '../'),
    targets: relationTargets(modelOptions),
    projectName: project,
    allModulesImport,
    moduleList,
  });
  await formatFiles(tree);
}

export default resourceGenerator;
