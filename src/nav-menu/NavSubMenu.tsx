import { ReactNode } from 'react';
import { NavSubMenuStructuralComponent } from '@zora/core/dist/nav-menu';

import { getComponentName } from '../basic';

class NavSubMenu extends NavSubMenuStructuralComponent {
  public render(): ReactNode {
    return this.props.children;
  }
}

(NavSubMenu as any).displayName = getComponentName('navSubMenu');

export default NavSubMenu;
