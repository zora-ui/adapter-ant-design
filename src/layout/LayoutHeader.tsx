import { ReactNode } from 'react';
import { LayoutHeaderStructuralComponent } from '@zora/core/dist/layout';
import { Layout as AntLayout } from 'antd';

export default class LayoutHeader extends LayoutHeaderStructuralComponent {
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
