import { ReactNode } from 'react';
import { LinkStructuralComponent } from '@zoras/core/dist/link';

import { getComponentName } from '../basic';

class Link extends LinkStructuralComponent {
  public render(): ReactNode {
    return (
      <a
        className={this.getComponentClassNames()}
        href={this.props.href}
        target={`_${this.props.target || 'self'}`}
        onClick={() => this.props.onClick && this.props.onClick()}
      >
        {this.props.children}
      </a>
    );
  }
}

(Link as any).displayName = getComponentName('link');

export default Link;
