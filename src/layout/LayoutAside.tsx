import { ReactNode } from 'react';
import { normalizeClassName } from 'petals-ui/dist/basic';
import { LayoutAsideStructuralComponent } from '@zora/core/dist/layout';
import { Layout as AntLayout } from 'antd';

export default class LayoutAside extends LayoutAsideStructuralComponent {
  public render(): ReactNode {
    return (
      <AntLayout.Sider
        className={normalizeClassName(this.props.className)}
        width={this.props.width}
      >
        {this.props.children}
      </AntLayout.Sider>
    );
  }
}
