import { ReactNode } from 'react';
import { LayoutHeaderStructuralComponent } from '@zoras/core/dist/layout';
import { Layout as AntLayout } from 'antd';

import { getComponentName } from '../basic';

class LayoutHeader extends LayoutHeaderStructuralComponent {
  public render(): ReactNode {
    return (
      <AntLayout.Header
        className={this.getHeadlessComponent()!.getExtraClassNames().join(' ')}
      >
        {this.props.children}
      </AntLayout.Header>
    );
  }
}

(LayoutHeader as any).displayName = getComponentName('layoutHeader');

export default LayoutHeader;
