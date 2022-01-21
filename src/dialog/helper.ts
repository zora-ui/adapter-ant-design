import { normalizeClassName } from 'petals-ui/dist/basic';
import { DialogButtonProps } from 'petals-ui/dist/dialog';

import { ButtonProps } from 'antd';

import { convertSize } from '../basic';

function convertButtonProps(props: DialogButtonProps): ButtonProps {
  return {
    className: normalizeClassName(props.className),
    size: convertSize(props.size),
  };
}

export { convertButtonProps };
