import { parse, stringify } from 'yaml';
import { join } from 'path';
import {} from 'fs';
export const PROJECT_CONFIG_PATH = './.app-config';

function configPath(moduleName: string) {
  return join(PROJECT_CONFIG_PATH, moduleName, '.yaml');
}

function readConfigFile(moduleName: string) {
  return;
}

export function config() {}
