import { ReactNode } from 'react';

import { TooltipPlacement } from 'petals-ui/dist/tooltip';
import { capitalize } from '@zora/core/dist/basic';
import { TooltipStructuralComponent } from '@zora/core/dist/tooltip';

import { TooltipProps, Tooltip as AntTooltip } from 'antd';

import { getComponentName } from '../basic';

function resolvePlacement(
  placement: TooltipPlacement = 'bottom',
): string | undefined {
  const parts = placement.split('-');

  return parts.length === 1 ? placement : `${parts[0]}${capitalize(parts[1])}`;
}

class Tooltip extends TooltipStructuralComponent {
  private resolveProps(): TooltipProps {
    const props: TooltipProps = {
      className: this.getComponentClassNames(),
      title: this.props.content,
      placement: resolvePlacement(this.props.placement) as any,
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
