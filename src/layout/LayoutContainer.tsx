import { ReactNode } from 'react';
import { normalizeClassName } from 'petals-ui/dist/basic';
import { LayoutContainerStructuralComponent } from '@zora/core/dist/layout';
import { Layout as AntLayout } from 'antd';

export default class LayoutContainer extends LayoutContainerStructuralComponent {
  public render(): ReactNode {
    return (
      <AntLayout className={normalizeClassName(this.props.className)}>
        {this.props.children}
      </AntLayout>
    );
  }
}
