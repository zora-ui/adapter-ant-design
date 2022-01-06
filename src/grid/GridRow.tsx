import { ReactNode } from 'react';
import { GridRowStructuralComponent } from '@zoras/core/dist/grid';
import { Row as AntRow } from 'antd';

import { getComponentName } from '../basic';

class GridRow extends GridRowStructuralComponent {
  public render(): ReactNode {
    return (
      <AntRow
        className={this.getComponentClassNames()}
        gutter={this.props.gutter}
      >
        {this.props.children}
      </AntRow>
    );
  }
}

(GridRow as any).displayName = getComponentName('gridRow');

export default GridRow;
