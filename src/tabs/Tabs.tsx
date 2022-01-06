import { PropsWithChildren, ReactNode, ReactElement } from 'react';

import { ITabPaneComponent } from 'petals-ui/dist/tabs';
import { includes, isSpecificComponent } from '@zoras/core/dist/basic';
import { TabsStructuralComponent } from '@zoras/core/dist/tabs';

import { TabsProps, Tabs as AntTabs } from 'antd';

import { getComponentName } from '../basic';

class Tabs extends TabsStructuralComponent {
  private resolveProps(): TabsProps {
    const props: TabsProps = {
      className: this.getComponentClassNames(),
      type: includes(this.props.theme, ['line', 'card'])
        ? this.props.theme
        : 'card',
      activeKey: `${this.props.activeFlag || 0}`,
      tabPosition: this.props.tabBarPlacement || 'top',
      onChange: (activeKey) =>
        this.props.onChange && this.props.onChange(activeKey),
    };

    return props;
  }

  private resolveChildren(): ReactNode[] {
    const tabPanes: ReactNode[] = [];

    ([] as any[]).concat(this.props.children).forEach((tab) => {
      if (isSpecificComponent(tab, getComponentName('tabPane'))) {
        const { props } = tab as ReactElement<
          PropsWithChildren<ITabPaneComponent>
        >;

        tabPanes.push(
          <AntTabs.TabPane key={props.flag} tab={props.label}>
            {props.children}
          </AntTabs.TabPane>,
        );
      }
    });

    return tabPanes;
  }

  public render(): ReactNode {
    return <AntTabs {...this.resolveProps()}>{this.resolveChildren()}</AntTabs>;
  }
}

(Tabs as any).displayName = getComponentName('tabs');

export default Tabs;
