import { ReactNode } from 'react';
import { LayoutContainerStructuralComponent } from '@zoras/core/dist/layout';
import { Layout as AntLayout } from 'antd';

import { getComponentName } from '../basic';

class LayoutContainer extends LayoutContainerStructuralComponent {
  public render(): ReactNode {
    return (
      <AntLayout className={this.getComponentClassNames()}>
        {this.props.children}
      </AntLayout>
    );
  }
}

(LayoutContainer as any).displayName = getComponentName('layoutContainer');

export default LayoutContainer;
