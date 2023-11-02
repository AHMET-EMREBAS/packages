import { join } from 'path';

/**
 * Target project directory
 * @param projectName
 * @returns
 */
export function projectRoot(projectName: string): string {
  return join('libs', projectName, 'src', 'lib', 'resources');
}
