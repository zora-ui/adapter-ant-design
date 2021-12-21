import { ReactNode } from 'react';
import { normalizeClassName } from 'petals-ui/dist/basic';
import { LayoutFooterStructuralComponent } from '@zora/core/dist/layout';
import { Layout as AntLayout } from 'antd';

export default class LayoutFooter extends LayoutFooterStructuralComponent {
  public render(): ReactNode {
    return (
      <AntLayout.Footer className={normalizeClassName(this.props.className)}>
        {this.props.children}
      </AntLayout.Footer>
    );
  }
}
