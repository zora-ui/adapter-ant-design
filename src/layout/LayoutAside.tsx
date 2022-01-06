import { ReactNode } from 'react';
import { LayoutAsideStructuralComponent } from '@zoras/core/dist/layout';
import { Layout as AntLayout } from 'antd';

import { getComponentName } from '../basic';

class LayoutAside extends LayoutAsideStructuralComponent {
  public render(): ReactNode {
    return (
      <AntLayout.Sider
        className={this.getHeadlessComponent()!.getExtraClassNames().join(' ')}
        width={this.props.width}
      >
        {this.props.children}
      </AntLayout.Sider>
    );
  }
}

(LayoutAside as any).displayName = getComponentName('layoutAside');

export default LayoutAside;
