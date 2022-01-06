import { ReactNode } from 'react';
import { RadioGroupStructuralComponent } from '@zoras/core/dist/radio';
import { Radio as AntRadio } from 'antd';

import { getComponentName } from '../basic';

class RadioGroup extends RadioGroupStructuralComponent {
  public render(): ReactNode {
    return (
      <AntRadio.Group
        className={this.getComponentClassNames()}
        name={this.props.name}
        value={this.props.value}
        disabled={this.props.disabled}
        onChange={({ target }) =>
          this.props.onChange && this.props.onChange((target as any).value)
        }
      >
        {this.props.children}
      </AntRadio.Group>
    );
  }
}

(RadioGroup as any).displayName = getComponentName('radioGroup');

export default RadioGroup;
