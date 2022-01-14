import { ReactNode } from 'react';

import { isSpecificComponent } from '@zoras/core/dist/basic';
import { NavMenuStructuralComponent } from '@zoras/core/dist/nav-menu';

import { MenuProps, Menu as AntMenu } from 'antd';

import { getComponentName } from '../basic';
import {
  resolveMenuItemProps,
  resolveMenuItemGroupProps,
  resolveSubMenuProps,
} from './helper';

class NavMenu extends NavMenuStructuralComponent {
  private resolveProps(): MenuProps {
    const inlineMenu = this.props.direction !== 'horizontal';
    const props: MenuProps = {
      className: this.getComponentClassNames(),
      mode: inlineMenu ? 'inline' : 'horizontal',
      triggerSubMenuAction: this.props.subMenuTrigger || 'hover',
    };

    if (this.props.openFlags) {
      props.defaultOpenKeys = this.props.openFlags;
    }

    if (this.props.activeFlag) {
      props.defaultSelectedKeys = [this.props.activeFlag];
    }

    // if (inlineMenu) {
    //   props.inlineCollapsed = this.props.collapsed;
    // }

    return props;
  }

  private renderMenuItems(children?: ReactNode): ReactNode {
    return ([] as any[]).concat(children).map((child) => {
      if (isSpecificComponent(child, getComponentName('navMenuItem'))) {
        return (
          <AntMenu.Item {...resolveMenuItemProps(child.props)}>
            {this.renderMenuItems(child.props.children)}
          </AntMenu.Item>
        );
      }

      if (isSpecificComponent(child, getComponentName('navMenuItemGroup'))) {
        return (
          <AntMenu.ItemGroup {...resolveMenuItemGroupProps(child.props)}>
            {this.renderMenuItems(child.props.children)}
          </AntMenu.ItemGroup>
        );
      }

      if (isSpecificComponent(child, getComponentName('navSubMenu'))) {
        return (
          <AntMenu.SubMenu {...resolveSubMenuProps(child.props)}>
            {this.renderMenuItems(child.props.children)}
          </AntMenu.SubMenu>
        );
      }

      return child;
    });
  }

  public render(): ReactNode {
    return (
      <AntMenu {...this.resolveProps()}>
        {this.renderMenuItems(this.props.children)}
      </AntMenu>
    );
  }
}

(NavMenu as any).displayName = getComponentName('navMenu');

export default NavMenu;
