import { ReactNode } from 'react';
import { RadioStructuralComponent } from '@zoras/core/dist/radio';
import { Radio as AntRadio } from 'antd';

import { getComponentName } from '../basic';

class Radio extends RadioStructuralComponent {
  public render(): ReactNode {
    return (
      <AntRadio
        className={this.getComponentClassNames()}
        name={this.props.name}
        value={this.props.value}
        checked={this.props.checked}
        disabled={this.props.disabled}
        onChange={({ target }) =>
          this.props.onChange && this.props.onChange((target as any).value)
        }
      >
        {this.props.children}
      </AntRadio>
    );
  }
}

(Radio as any).displayName = getComponentName('radio');

export default Radio;
