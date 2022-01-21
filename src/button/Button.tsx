import { ReactNode } from 'react';
import { ButtonStructuralComponent } from '@zoras/core/dist/button';
import { ButtonProps, Button as AntButton } from 'antd';

import { getComponentName, convertSize } from '../basic';

class Button extends ButtonStructuralComponent {
  private resolveProps(): ButtonProps {
    const props: ButtonProps = {
      className: this.getHeadlessComponent()!.getExtraClassNames().join(' '),
      size: convertSize(this.props.size),
      disabled: this.props.disabled,
      ghost: this.props.outlined,
      htmlType: this.props.nativeType,
    };

    if (this.props.color === 'primary') {
      props.type = 'primary';
    } else {
      if (this.props.color === 'danger') {
        props.type = 'primary';
        props.danger = true;
      } else if (this.props.border === 'none') {
        props.type = 'text';
      } else if (this.props.border === 'dashed') {
        props.type = 'dashed';
      }
    }

    if (this.props.onClick) {
      props.onClick = (evt) => this.props.onClick!(evt);
    }

    return props;
  }

  public render(): ReactNode {
    return (
      <AntButton {...this.resolveProps()}>{this.props.children}</AntButton>
    );
  }
}

(Button as any).displayName = getComponentName('button');

export default Button;
