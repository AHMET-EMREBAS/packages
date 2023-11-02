import { Tree } from '@nx/devkit';
import { generateFiles } from '../helpers';

export async function gen(tree: Tree, options: any) {
  await generateFiles(__dirname, tree, options);
}

export default gen;
