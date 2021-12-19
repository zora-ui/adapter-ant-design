import { ButtonSize } from 'petals-ui/dist/button';

type AntSizeType = 'large' | 'middle' | 'small';

function convertSize(size: ButtonSize): AntSizeType {
  return size === 'medium' ? 'middle' : size;
}

export { convertSize };
