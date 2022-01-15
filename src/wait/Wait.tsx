import { ReactNode } from 'react';
import { WaitStructuralComponent } from '@zoras/core/dist/wait';
import { SpinProps, Spin as AntSpin } from 'antd';

import { getComponentName } from '../basic';

class Wait extends WaitStructuralComponent {
  private resolveProps(): SpinProps {
    const props: SpinProps = {
      wrapperClassName: this.getComponentClassNames(),
      spinning: this.props.busy,
      tip: this.props.text,
    };

    return props;
  }

  public render(): ReactNode {
    return <AntSpin {...this.resolveProps()}>{this.props.children}</AntSpin>;
  }
}

(Wait as any).displayName = getComponentName('wait');

export default Wait;
