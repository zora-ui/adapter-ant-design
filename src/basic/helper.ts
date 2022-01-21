import { ComplexPlacement } from 'petals-ui/dist/basic';
import { ButtonSize } from 'petals-ui/dist/button';
import { capitalize, getComponentName as _getComponentName } from '@zoras/core/dist/basic';

type AntSizeType = 'large' | 'middle' | 'small';

function getComponentName(moduleName: string): string {
  return _getComponentName(moduleName, 'ZoraAnt');
}

function convertSize(size?: ButtonSize): AntSizeType {
  if (size) {
    return size === 'medium' ? 'middle' : size;
  }

  return 'middle';
}

function convertPlacement(placement: ComplexPlacement = 'bottom'): string | undefined {
  const parts = placement.split('-');

  return parts.length === 1 ? placement : `${parts[0]}${capitalize(parts[1])}`;
}

export { getComponentName, convertSize, convertPlacement };
