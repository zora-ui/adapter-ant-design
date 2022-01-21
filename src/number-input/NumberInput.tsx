import { ReactNode } from 'react';

import { pick } from '@zoras/core/dist/basic';
import { NumberInputStructuralComponent } from '@zoras/core/dist/number-input';

import { InputNumberProps, InputNumber as AntInputNumber } from 'antd';

import { getComponentName, convertSize } from '../basic';

class NumberInput extends NumberInputStructuralComponent {
  private resolveProps(): InputNumberProps {
    return {
      ...pick(this.props, [
        'name',
        'value',
        'disabled',
        'placeholder',
        'max',
        'min',
      ] as (keyof InputNumberProps)[]),
      className: this.getComponentClassNames(),
      size: convertSize(this.props.size),
      readOnly: this.props.readonly,
      onInput: (text) => this.props.onInput && this.props.onInput(text as any),
      onChange: (value) =>
        this.props.onChange && this.props.onChange(value as any),
    };
  }

  public render(): ReactNode {
    return (
      <AntInputNumber {...this.resolveProps()}>
        {this.props.children}
      </AntInputNumber>
    );
  }
}

(NumberInput as any).displayName = getComponentName('numberInput');

export default NumberInput;
