import { ReactNode } from 'react';
import { FormFieldStructuralComponent } from '@zora/core/dist/form';
import { Form as AntForm } from 'antd';

import { getComponentName } from '../basic';

class FormField extends FormFieldStructuralComponent {
  public render(): ReactNode {
    return (
      <AntForm.Item
        className={this.getComponentClassNames()}
        label={this.props.label}
        required={this.props.required}
        validateStatus={this.props.message ? 'error' : undefined}
        help={this.props.message}
        extra={this.props.hint}
      >
        {this.props.children}
      </AntForm.Item>
    );
  }
}

(FormField as any).displayName = getComponentName('formField');

export default FormField;
