import { Tree } from '@nx/devkit';
import { ResourceGeneratorSchema } from './schema';
import entityGenerator from '../entity/generator';
import dtoGenerator from '../dto/generator';
import viewGenerator from '../view/generator';
import subscriberGenerator from '../subscriber/generator';

export async function resourceGenerator(
  tree: Tree,
  options: ResourceGeneratorSchema
) {
  await entityGenerator(tree, options);
  await dtoGenerator(tree, options);
  await viewGenerator(tree, options);
  await subscriberGenerator(tree, options);
}

export default resourceGenerator;
