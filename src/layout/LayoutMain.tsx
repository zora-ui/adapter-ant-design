import { ReactNode } from 'react';
import { LayoutMainStructuralComponent } from '@zora/core/dist/layout';
import { Layout as AntLayout } from 'antd';

export default class LayoutMain extends LayoutMainStructuralComponent {
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
