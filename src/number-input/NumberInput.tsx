import { ReactNode } from 'react';
import { InputNumber as AntInputNumber } from 'antd';

import { NumberInputStructuralComponent } from '@zoras/core/dist/number-input';

import { getComponentName } from '../basic';
import { resolveNumericFormControlProps } from '../form-control';
import { resolvePrefixOrSuffix } from './helper';

class NumberInput extends NumberInputStructuralComponent {
  public render(): ReactNode {
    return (
      <AntInputNumber
        className={this.getComponentClassNames()}
        prefix={resolvePrefixOrSuffix(this.props.prefix)}
        addonAfter={resolvePrefixOrSuffix(this.props.suffix)}
        {...resolveNumericFormControlProps(this.props)}
      >
        {this.props.children}
      </AntInputNumber>
    );
  }
}

(NumberInput as any).displayName = getComponentName('numberInput');

export default NumberInput;
