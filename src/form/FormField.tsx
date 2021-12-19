import { ReactNode } from 'react';
import { normalizeClassName } from 'petals-ui/dist/basic';
import { FormFieldStructuralComponent } from '@zora/core/dist/form';
import { Form as AntForm } from 'antd';

export default class FormField extends FormFieldStructuralComponent {
  public render(): ReactNode {
    return (
      <AntForm.Item
        className={normalizeClassName(this.props.className)}
        label={this.props.label}
        required={this.props.required}
        help={this.props.message}
        extra={this.props.hint}
      >
        {this.props.children}
      </AntForm.Item>
    );
  }
}
