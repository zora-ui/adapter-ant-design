import { ReactNode } from 'react';
import { TextInputStructuralComponent } from '@zora/core/dist/text-input';
import { Input as AntInput } from 'antd';

import { convertSize } from '../basic';

export default class TextInput extends TextInputStructuralComponent {
  public render(): ReactNode {
    return (
      <AntInput
        className={this.getComponentClassNames()}
        size={this.props.size ? convertSize(this.props.size) : 'middle'}
      />
    );
  }
}
