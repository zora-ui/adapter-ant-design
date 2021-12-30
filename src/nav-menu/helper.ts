import { IMenuItemComponent } from 'petals-ui/dist/menu';
import {
  INavMenuItemComponent,
  INavMenuItemGroupComponent,
  INavSubMenuComponent,
} from 'petals-ui/dist/nav-menu';
import { pick } from '@zora/core/dist/basic';
import { MenuItemProps, SubMenuProps } from 'antd';

function resolveMenuItemProps(props: IMenuItemComponent): MenuItemProps & { key: string } {
  return {
    ...pick(props, ['title', 'icon', 'disabled'] as (keyof Omit<IMenuItemComponent, 'flag'>)[]),
    key: props.flag || '0',
  };
}

function resolveMenuItemGroupProps(props: INavMenuItemGroupComponent): Record<string, any> {
  return { key: props.flag, title: props.title };
}

function resolveSubMenuProps(props: INavSubMenuComponent): SubMenuProps {
  return { ...resolveMenuItemProps(props), popupClassName: props.popupClassName };
}

export { resolveMenuItemProps, resolveMenuItemGroupProps, resolveSubMenuProps };
