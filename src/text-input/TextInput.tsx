import { ReactNode } from 'react';
import { TextInputStructuralComponent } from '@zoras/core/dist/text-input';
import { InputProps, Input as AntInput } from 'antd';

import { getComponentName, convertSize } from '../basic';

class TextInput extends TextInputStructuralComponent {
  private resolveProps(): InputProps {
    const props: InputProps = {
      className: this.getComponentClassNames(),
      name: this.props.name,
      value: this.props.value,
      size: convertSize(this.props.size),
      disabled: this.props.disabled,
      readOnly: this.props.readonly,
      placeholder: this.props.placeholder,
      allowClear: this.props.clearable,
      maxLength: this.props.maxLength,
      minLength: this.props.minLength,
      onInput: ({ target }) =>
        this.props.onInput && this.props.onInput((target as any).value),
      onChange: ({ target }) =>
        this.props.onChange && this.props.onChange((target as any).value),
    };

    return props;
  }

  public render(): ReactNode {
    return <AntInput {...this.resolveProps()} />;
  }
}

(TextInput as any).displayName = getComponentName('textInput');

export default TextInput;
