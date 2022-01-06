import { ReactNode } from 'react';
import { LayoutFooterStructuralComponent } from '@zoras/core/dist/layout';
import { Layout as AntLayout } from 'antd';

import { getComponentName } from '../basic';

class LayoutFooter extends LayoutFooterStructuralComponent {
  public render(): ReactNode {
    return (
      <AntLayout.Footer
        className={this.getHeadlessComponent()!.getExtraClassNames().join(' ')}
      >
        {this.props.children}
      </AntLayout.Footer>
    );
  }
}

(LayoutFooter as any).displayName = getComponentName('layoutFooter');

export default LayoutFooter;
