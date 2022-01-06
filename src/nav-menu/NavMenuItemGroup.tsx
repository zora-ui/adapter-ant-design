import { ReactNode } from 'react';
import { NavMenuItemGroupStructuralComponent } from '@zoras/core/dist/nav-menu';

import { getComponentName } from '../basic';

class NavMenuItemGroup extends NavMenuItemGroupStructuralComponent {
  public render(): ReactNode {
    return this.props.children;
  }
}

(NavMenuItemGroup as any).displayName = getComponentName('navMenuItemGroup');

export default NavMenuItemGroup;
