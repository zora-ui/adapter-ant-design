import { ReactNode } from 'react';
import * as icons from '@ant-design/icons';

import { IconOption } from 'petals-ui/dist/icon';

import { capitalize } from '@zoras/core/dist/basic';
import { IconStructuralComponent } from '@zoras/core/dist/icon';

import { getComponentName } from '../basic';

class Icon extends IconStructuralComponent {
  private resolveProps(): Record<string, any> {
    return {
      className: this.getComponentClassNames(),
      onClick: () => this.props.onClick && this.props.onClick(),
    };
  }

  private renderAntdIcon(ref: string, option: IconOption): ReactNode {
    const resolvedRef = !ref && !option.resolve ? option.ref : ref;

    if (!resolvedRef) {
      return null;
    }

    const lowerCase = resolvedRef.toLowerCase();
    const parts = resolvedRef.split('-');

    if (
      lowerCase.indexOf('outlined') === -1 &&
      lowerCase.indexOf('filled') === -1 &&
      lowerCase.indexOf('twotone') === -1 &&
      lowerCase.indexOf('two-tone') === -1
    ) {
      parts.push('outlined');
    }

    const AntdIcon = icons[parts.map((part) => capitalize(part)).join('')];

    return AntdIcon ? <AntdIcon {...this.resolveProps()} /> : null;
  }

  public render(): ReactNode {
    const option = this.getHeadlessComponent()!.getOption();
    const ref = this.state.iconRef;

    if (option.provider === 'antd') {
      return this.renderAntdIcon(ref, option);
    }

    const contentClassName = this.getDescendantClassName('content');

    return (
      <span {...this.resolveProps()}>
        {this.state.iconType === 'svg' ? (
          <svg
            className={contentClassName}
            focusable="false"
            aria-hidden="true"
          >
            <use xlinkHref={`#${ref}`} />
          </svg>
        ) : (
          <i className={contentClassName} aria-hidden="true" />
        )}
      </span>
    );
  }
}

(Icon as any).displayName = getComponentName('icon');

export default Icon;
