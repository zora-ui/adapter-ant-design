import { ReactNode } from 'react';
import { LayoutMainStructuralComponent } from '@zoras/core/dist/layout';
import { Layout as AntLayout } from 'antd';

import { getComponentName } from '../basic';

class LayoutMain extends LayoutMainStructuralComponent {
  public render(): ReactNode {
    return (
      <AntLayout.Content
        className={this.getHeadlessComponent()!.getExtraClassNames().join(' ')}
      >
        {this.props.children}
      </AntLayout.Content>
    );
  }
}

(LayoutMain as any).displayName = getComponentName('layoutMain');

export default LayoutMain;
