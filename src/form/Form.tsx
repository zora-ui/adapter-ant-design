import { ReactNode } from 'react';
import { FormStructuralComponent } from '@zora/core/dist/form';
import { FormProps, Form as AntForm } from 'antd';

import { getComponentName, convertSize } from '../basic';
import FormComponentContext from './context';

class Form extends FormStructuralComponent {
  private resolveProps(): FormProps {
    const props: FormProps = {
      className: this.getComponentClassNames(),
      layout: this.props.layout,
      size: this.props.controlSize
        ? convertSize(this.props.controlSize)
        : 'middle',
      initialValues: this.props.value,
      colon: false,
    };

    const { width, align } = this.props.labelOption || {};

    if (width) {
      props.labelCol = { style: { width } };
    }

    if (align) {
      props.labelAlign = align;
    }

    return props;
  }

  public render(): ReactNode {
    const { width, align } = this.props.labelOption || {};

    return (
      <AntForm {...this.resolveProps()}>
        <FormComponentContext.Provider
          value={{ labelWidth: width, labelAlign: align }}
        >
          {this.props.children}
        </FormComponentContext.Provider>
      </AntForm>
    );
  }
}

(Form as any).displayName = getComponentName('form');

export default Form;
