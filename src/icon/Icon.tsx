import { ReactNode } from 'react';
import { IconStructuralComponent } from '@zoras/core/dist/icon';

import { getComponentName } from '../basic';

class Icon extends IconStructuralComponent {
  public render(): ReactNode {
    const contentClassName = this.getDescendantClassName('content');

    return (
      <span
        className={this.getComponentClassNames()}
        onClick={() => this.props.onClick && this.props.onClick()}
      >
        {this.state.iconType === 'svg' ? (
          <svg
            className={contentClassName}
            focusable="false"
            aria-hidden="true"
          >
            <use xlinkHref={`#${this.state.iconRef}`} />
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
