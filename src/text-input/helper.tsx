import { ReactNode } from 'react';

import { FormControlPrefixAndSuffix } from 'petals-ui/dist/form-control';
import { isString } from '@zoras/core/dist/basic';

import { Icon } from '../icon';

function resolvePrefixOrSuffix(
  prefixOrSuffix: FormControlPrefixAndSuffix | string | undefined,
): ReactNode {
  if (!prefixOrSuffix) {
    return undefined;
  }

  const resolved: FormControlPrefixAndSuffix = isString(prefixOrSuffix)
    ? { type: 'text', text: prefixOrSuffix as string }
    : (prefixOrSuffix as FormControlPrefixAndSuffix);

  return resolved.type === 'text' ? (
    resolved.text
  ) : (
    <Icon refs={resolved.icon} />
  );
}

export { resolvePrefixOrSuffix };
