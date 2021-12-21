import { ReactNode } from 'react';
import { normalizeClassName } from 'petals-ui/dist/basic';
import { LayoutMainStructuralComponent } from '@zora/core/dist/layout';
import { Layout as AntLayout } from 'antd';

export default class LayoutMain extends LayoutMainStructuralComponent {
  public render(): ReactNode {
    return (
      <AntLayout.Content className={normalizeClassName(this.props.className)}>
        {this.props.children}
      </AntLayout.Content>
    );
  }
}
