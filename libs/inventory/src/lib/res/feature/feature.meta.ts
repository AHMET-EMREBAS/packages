import { ReadFeatureDto } from './dto';
import { Rest } from './imports';
import { Feature } from './entity';

export const FeatureEntityName = 'Feature';
export const FeatureViewName = 'Feature';
export const FeatureSingularPath = 'feature';
export const FeaturePluralPath = 'features';
export const FeatureSingularViewPath = 'feature-view';
export const FeaturePluralViewPath = 'features-view';

export const FeatureSearchables: (keyof Feature)[] = [];
export const FeatureUniqueFields: (keyof Feature)[] = ['feature'];
export const FeatureViewSearchables: string[] = [];

export const FeatureRest = new Rest(
  FeatureEntityName,
  FeatureSingularPath,
  FeaturePluralPath,
  ReadFeatureDto
);
