import { ReactNode } from 'react';
import { TextAreaStructuralComponent } from '@zoras/core/dist/text-area';
import { Input as AntInput } from 'antd';

import { getComponentName, convertSize } from '../basic';

class TextArea extends TextAreaStructuralComponent {
  private resolveProps(): Record<string, any> {
    const props: Record<string, any> = {
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
      rows: this.props.rows,
      showCount: this.props.showWordage,
      onInput: ({ target }) =>
        this.props.onInput && this.props.onInput((target as any).value),
      onChange: ({ target }) =>
        this.props.onChange && this.props.onChange((target as any).value),
    };

    return props;
  }

  public render(): ReactNode {
    return <AntInput.TextArea {...this.resolveProps()} />;
  }
}

(TextArea as any).displayName = getComponentName('textArea');

export default TextArea;
