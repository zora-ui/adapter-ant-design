import { ReactNode } from 'react';

import { ISelectOptionComponent } from 'petals-ui/dist/select';
import { isSpecificComponent } from '@zora/core/dist/basic';
import { SelectStructuralComponent } from '@zora/core/dist/select';

import { Select as AntSelect } from 'antd';

import { getComponentName, convertSize } from '../basic';

class Select extends SelectStructuralComponent {
  private resolveOptions(): ISelectOptionComponent[] {
    const options: ISelectOptionComponent[] = [];

    ([] as any).concat(this.props.children).forEach((child) => {
      if (isSpecificComponent(child, getComponentName('option'))) {
        options.push({ ...child.props });
      }
    });

    return options;
  }

  public render(): ReactNode {
    return (
      <AntSelect
        className={this.getComponentClassNames()}
        value={this.props.value}
        disabled={this.props.disabled}
        placeholder={this.props.placeholder}
        options={this.resolveOptions()}
        allowClear={this.props.clearable}
        size={this.props.size ? convertSize(this.props.size) : 'middle'}
        onChange={this.props.onChange}
      />
    );
  }
}

(Select as any).displayName = getComponentName('select');

export default Select;
