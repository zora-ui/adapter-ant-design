import { ReactNode } from 'react';
import { normalizeClassName } from 'petals-ui/dist/basic';
import { FormStructuralComponent } from '@zora/core/dist/form';
import { Form as AntForm } from 'antd';

import { convertSize } from '../basic';

export default class Form extends FormStructuralComponent {
  public render(): ReactNode {
    return (
      <AntForm
        className={normalizeClassName(this.props.className)}
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
