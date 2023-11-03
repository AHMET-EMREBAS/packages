import { SetMetadata } from '@nestjs/common';
import { v4 } from 'uuid';

function token(name: string) {
  return name + '_' + v4();
}



/**
 * - Bearer Token Name
 * - Cookie Name
 */
export const ACCESS_TOKEN = 'access-token';

export const PERMISSION_TOKEN = token('permission');

export function Permission(entityName: string, event: 'Read' | 'Write') {
  return SetMetadata(PERMISSION_TOKEN, `${event}:${entityName}`);
}

export function ReadPermission(entityName: string) {
  return Permission(entityName, 'Read');
}

export function WritePermission(entityName: string) {
  return Permission(entityName, 'Write');
}

/**
 * Role metadata
 */
export const ROLE_TOKEN = token('role');

export function Role(entityName: string, event: 'Read' | 'Write') {
  return SetMetadata(ROLE_TOKEN, `${event}:${entityName}`);
}

export function ReadRole(entityName: string) {
  return Role(entityName, 'Read');
}

export function WriteRole(entityName: string) {
  return Role(entityName, 'Write');
}
