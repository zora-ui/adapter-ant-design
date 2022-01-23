import { MenuItemProps, SubMenuProps } from 'antd';

import { IMenuItemComponent } from 'petals-ui/dist/menu';
import {
  INavMenuItemGroupComponent,
  INavSubMenuComponent,
} from 'petals-ui/dist/nav-menu';
import { isString, pick } from '@zoras/core/dist/basic';

import { Icon } from '../icon';

function resolveMenuItemProps(
  props: IMenuItemComponent,
): MenuItemProps & { key: string } {
  return {
    ...pick(props, ['title', 'disabled'] as (keyof Omit<
      IMenuItemComponent,
      'flag' | 'icon'
    >)[]),
    key: props.flag || '0',
    icon: isString(props.icon) ? <Icon refs={props.icon} /> : props.icon,
  };
}

function resolveMenuItemGroupProps(
  props: INavMenuItemGroupComponent,
): Record<string, any> {
  return { key: props.flag, title: props.title };
}

function resolveSubMenuProps(props: INavSubMenuComponent): SubMenuProps {
  return {
    ...resolveMenuItemProps(props),
    popupClassName: props.popupClassName,
  };
}

export { resolveMenuItemProps, resolveMenuItemGroupProps, resolveSubMenuProps };
