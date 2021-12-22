import { ReactNode } from 'react';
import { LayoutFooterStructuralComponent } from '@zora/core/dist/layout';
import { Layout as AntLayout } from 'antd';

export default class LayoutFooter extends LayoutFooterStructuralComponent {
  public render(): ReactNode {
    return (
      <AntLayout.Footer
        className={this.getHeadlessComponent()!.getExtraClassNames().join(' ')}
      >
        {this.props.children}
      </AntLayout.Footer>
    );
  }
}
