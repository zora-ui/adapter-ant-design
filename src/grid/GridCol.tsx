import { ReactNode } from 'react';
import { pick } from '@zoras/core/dist/basic';
import { GridColStructuralComponent } from '@zoras/core/dist/grid';
import { ColProps, Col as AntCol } from 'antd';

import { getComponentName } from '../basic';

class GridCol extends GridColStructuralComponent {
  private resolveProps(): ColProps {
    return {
      className: this.getComponentClassNames(),
      ...pick(this.props, [
        'span',
        'offset',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
      ] as (keyof ColProps)[]),
    };
  }

  public render(): ReactNode {
    return <AntCol {...this.resolveProps()}>{this.props.children}</AntCol>;
  }
}

(GridCol as any).displayName = getComponentName('gridCol');

export default GridCol;
