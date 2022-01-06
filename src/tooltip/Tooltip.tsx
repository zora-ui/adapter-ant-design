import { ReactNode } from 'react';
import { TooltipStructuralComponent } from '@zoras/core/dist/tooltip';
import { TooltipProps, Tooltip as AntTooltip } from 'antd';

import { getComponentName, convertPlacement } from '../basic';

class Tooltip extends TooltipStructuralComponent {
  private resolveProps(): TooltipProps {
    const props: TooltipProps = {
      className: this.getComponentClassNames(),
      title: this.props.content,
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
      <AntTooltip {...this.resolveProps()}>{this.props.children}</AntTooltip>
    );
  }
}

(Tooltip as any).displayName = getComponentName('tooltip');

export default Tooltip;
