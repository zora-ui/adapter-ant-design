import { ButtonSize } from 'petals-ui/dist/button';
import { getComponentName as _getComponentName } from '@zora/core/dist/basic';

type AntSizeType = 'large' | 'middle' | 'small';

function getComponentName(moduleName: string): string {
  return _getComponentName(moduleName, 'ZoraAnt');
}

function convertSize(size: ButtonSize): AntSizeType {
  return size === 'medium' ? 'middle' : size;
}

export { getComponentName, convertSize };
