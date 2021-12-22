import { ReactNode } from 'react';
import { LayoutAsideStructuralComponent } from '@zora/core/dist/layout';
import { Layout as AntLayout } from 'antd';

export default class LayoutAside extends LayoutAsideStructuralComponent {
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
