import { ReactNode } from 'react';
import { FormFieldStructuralComponent } from '@zoras/core/dist/form';
import { FormItemProps, Form as AntForm } from 'antd';

import { getComponentName } from '../basic';
import FormComponentContext from './context';

class FormField extends FormFieldStructuralComponent {
  static contextType = FormComponentContext;

  private resolveProps(): FormItemProps {
    const props: FormItemProps = {
      className: this.getComponentClassNames(),
      label: this.props.label,
      required: this.props.required,
      validateStatus: this.props.message ? 'error' : undefined,
      help: this.props.message,
      extra: this.props.hint,
    };

    const { width, align } = this.props.labelOption || {};
    const resolvedLabelWidth = this.context.labelWidth || width;
    const resolvedLabelAlign = this.context.labelAlign || align;

    if (resolvedLabelWidth) {
      props.labelCol = { style: { width: resolvedLabelWidth } };
    }

    if (resolvedLabelAlign) {
      props.labelAlign = resolvedLabelAlign;
    }

    return props;
  }

  public render(): ReactNode {
    return (
      <AntForm.Item {...this.resolveProps()}>
        {this.props.children}
      </AntForm.Item>
    );
  }
}

(FormField as any).displayName = getComponentName('formField');

export default FormField;
