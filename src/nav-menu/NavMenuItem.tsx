import { ReactNode } from 'react';
import { NavMenuItemStructuralComponent } from '@zora/core/dist/nav-menu';

import { getComponentName } from '../basic';

class NavMenuItem extends NavMenuItemStructuralComponent {
  public render(): ReactNode {
    return this.props.children;
  }
}

(NavMenuItem as any).displayName = getComponentName('navMenuItem');

export default NavMenuItem;
