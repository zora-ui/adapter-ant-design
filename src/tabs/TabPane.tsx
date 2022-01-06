import { ReactNode } from 'react';
import { TabPaneStructuralComponent } from '@zoras/core/dist/tabs';

import { getComponentName } from '../basic';

class TabPane extends TabPaneStructuralComponent {
  public render(): ReactNode {
    return this.props.children;
  }
}

(TabPane as any).displayName = getComponentName('tabPane');

export default TabPane;
