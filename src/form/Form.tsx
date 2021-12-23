import { ReactNode } from 'react';
import { FormStructuralComponent } from '@zora/core/dist/form';
import { Form as AntForm } from 'antd';

import { getComponentName, convertSize } from '../basic';

class Form extends FormStructuralComponent {
  public render(): ReactNode {
    return (
      <AntForm
        className={this.getComponentClassNames()}
        layout={this.props.layout}
        size={
          this.props.controlSize
            ? convertSize(this.props.controlSize)
            : 'middle'
        }
        initialValues={this.props.value}
      >
        {this.props.children}
      </AntForm>
    );
  }
}

(Form as any).displayName = getComponentName('form');

export default Form;
