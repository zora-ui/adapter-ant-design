import { ReactNode } from 'react';
import { LayoutContainerStructuralComponent } from '@zora/core/dist/layout';
import { Layout as AntLayout } from 'antd';

export default class LayoutContainer extends LayoutContainerStructuralComponent {
  public render(): ReactNode {
    return (
      <AntLayout className={this.getComponentClassNames()}>
        {this.props.children}
      </AntLayout>
    );
  }
}
