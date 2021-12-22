import { ReactNode } from 'react';
import { ButtonStructuralComponent } from '@zora/core/dist/button';
import { Button as AntButton, ButtonProps } from 'antd';

import { convertSize } from '../basic';

export default class Button extends ButtonStructuralComponent {
  public render(): ReactNode {
    const props: ButtonProps = {
      className: this.getHeadlessComponent()!.getExtraClassNames().join(' '),
      size: this.props.size ? convertSize(this.props.size) : 'middle',
      disabled: this.props.disabled,
      ghost: this.props.outlined,
      htmlType: this.props.nativeType,
    };

    if (this.props.color === 'primary') {
      props.type = 'primary';
    } else {
      if (this.props.color === 'danger') {
        props.danger = true;
      }

      if (this.props.border === 'none') {
        props.type = 'text';
      } else if (this.props.border === 'dashed') {
        props.type = 'dashed';
      }
    }

    return <AntButton {...props}>{this.props.children}</AntButton>;
  }
}
