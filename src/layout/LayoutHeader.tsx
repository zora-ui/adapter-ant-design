import { ReactNode } from 'react';
import { normalizeClassName } from 'petals-ui/dist/basic';
import { LayoutHeaderStructuralComponent } from '@zora/core/dist/layout';
import { Layout as AntLayout } from 'antd';

export default class LayoutHeader extends LayoutHeaderStructuralComponent {
  public render(): ReactNode {
    return (
      <AntLayout.Header className={normalizeClassName(this.props.className)}>
        {this.props.children}
      </AntLayout.Header>
    );
  }
}
