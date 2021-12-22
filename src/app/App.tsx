import { ReactNode } from 'react';
import { AppStructuralComponent } from '@zora/core/dist/app';

export default class LayoutAside extends AppStructuralComponent {
  public render(): ReactNode {
    return (
      <div className={this.getComponentClassNames()}>{this.props.children}</div>
    );
  }
}
