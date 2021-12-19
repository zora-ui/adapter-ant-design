import { ReactNode } from 'react';
import { normalizeClassName } from 'petals-ui/dist/basic';
import { SelectStructuralComponent } from '@zora/core/dist/select';
import { Select as AntSelect } from 'antd';

import { convertSize } from '../basic';

export default class Select extends SelectStructuralComponent {
  public render(): ReactNode {
    return (
      <AntSelect
        className={normalizeClassName(this.props.className)}
        value={this.props.value}
        disabled={this.props.disabled}
        placeholder={this.props.placeholder}
        allowClear={this.props.clearable}
        size={this.props.size ? convertSize(this.props.size) : 'middle'}
        onChange={this.props.onChange}
      >
        {this.props.children}
      </AntSelect>
    );
  }
}
