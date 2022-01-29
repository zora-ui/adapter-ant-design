import { ReactNode } from 'react';
import { Input as AntInput } from 'antd';
import { TextInputStructuralComponent } from '@zoras/core/dist/text-input';

import { getComponentName } from '../basic';
import { resolveTextualFormControlProps } from '../form-control';
import { resolvePrefixOrSuffix } from './helper';

class TextInput extends TextInputStructuralComponent {
  public render(): ReactNode {
    return (
      <AntInput
        className={this.getComponentClassNames()}
        prefix={resolvePrefixOrSuffix(this.props.prefix)}
        suffix={resolvePrefixOrSuffix(this.props.suffix)}
        {...resolveTextualFormControlProps(this.props)}
      />
    );
  }
}

(TextInput as any).displayName = getComponentName('textInput');

export default TextInput;
