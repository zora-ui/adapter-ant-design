import { ReactNode } from 'react';
import { SelectOptionStructuralComponent } from '@zoras/core/dist/select';
import { Select as AntSelect } from 'antd';

import { getComponentName } from '../basic';

class Option extends SelectOptionStructuralComponent {
  public render(): ReactNode {
    return (
      <AntSelect.Option
        className={this.getComponentClassNames()}
        value={this.props.value!}
        disabled={this.props.disabled}
      >
        {this.props.children || this.props.label}
      </AntSelect.Option>
    );
  }
}

(Option as any).displayName = getComponentName('option');

export default Option;
