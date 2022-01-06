import { ReactNode } from 'react';
import { PopoverStructuralComponent } from '@zoras/core/dist/popover';
import { PopoverProps, Popover as AntPopover } from 'antd';

import { getComponentName, convertPlacement } from '../basic';

class Popover extends PopoverStructuralComponent {
  private resolveProps(): PopoverProps {
    const props: PopoverProps = {
      className: this.getComponentClassNames(),
      title: this.props.title,
      content: this.props.content,
      placement: convertPlacement(this.props.placement) as any,
      trigger: this.props.trigger || 'hover',
      visible: this.props.visible,
      overlayClassName: this.props.popupClassName,
      onVisibleChange: (visible) =>
        this.props.onVisibleChange && this.props.onVisibleChange(visible),
    };

    if (this.props.disabled) {
      props.visible = false;
    }

    return props;
  }

  public render(): ReactNode {
    return (
      <AntPopover {...this.resolveProps()}>{this.props.children}</AntPopover>
    );
  }
}

(Popover as any).displayName = getComponentName('popover');

export default Popover;
