import { isString, isArray } from '@zoras/core/dist/basic';

function resolveScheme(scheme: string | string[]): string[] {
  if (scheme) {
    if (isString(scheme)) {
      return [scheme as string];
    }

    if (isArray(scheme)) {
      return (scheme as string[]).filter(isString);
    }
  }

  return [];
}

function resolvePrefix(scheme: string, noAuthority: boolean = false): string {
  return `${scheme}:${noAuthority ? '' : '//'}`;
}

function resolveChangedValue(prefix: string, value?: string): string {
  return value ? `${prefix}${value}` : '';
}

export { resolveScheme, resolvePrefix, resolveChangedValue };
