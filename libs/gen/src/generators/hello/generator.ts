import { Tree } from '@nx/devkit';
import { HelloGeneratorSchema } from './schema';

export async function helloGenerator(
  tree: Tree,
  options: HelloGeneratorSchema
) {
  console.log('Hello World');
}

export default helloGenerator;
