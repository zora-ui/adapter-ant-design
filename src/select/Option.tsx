import { ReactNode } from 'react';
import { normalizeClassName } from 'petals-ui/dist/basic';
import { SelectOptionStructuralComponent } from '@zora/core/dist/select';
import { Select as AntSelect } from 'antd';

export default class Option extends SelectOptionStructuralComponent {
  public render(): ReactNode {
    return (
      <AntSelect.Option
        className={normalizeClassName(this.props.className)}
        value={this.props.value}
        disabled={this.props.disabled}
      >
        {this.props.children || this.props.label}
      </AntSelect.Option>
    );
  }
}
