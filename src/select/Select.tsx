import { ReactNode } from 'react';

import { SelectValueType, ISelectOptionComponent } from 'petals-ui/dist/select';
import { isSpecificComponent } from '@zoras/core/dist/basic';
import { SelectStructuralComponent } from '@zoras/core/dist/select';

import { SelectProps, Select as AntSelect } from 'antd';

import { getComponentName, convertSize } from '../basic';

class Select extends SelectStructuralComponent {
  private resolveOptions(): ISelectOptionComponent[] {
    const options: ISelectOptionComponent[] = [];

    ([] as any).concat(this.props.children).forEach((child) => {
      if (isSpecificComponent(child, getComponentName('option'))) {
        options.push({ ...child.props });
      }
    });

    return options;
  }

  private resolveProps(): SelectProps<SelectValueType | undefined> {
    const props: SelectProps<SelectValueType | undefined> & {
      className: string;
    } = {
      className: this.getComponentClassNames(),
      value: this.props.value,
      disabled: this.props.disabled,
      placeholder: this.props.placeholder,
      options: this.resolveOptions(),
      allowClear: this.props.clearable,
      size: convertSize(this.props.size),
      onChange: (value) => this.props.onChange && this.props.onChange(value!),
    };

    if (this.props.multiple) {
      props.mode = 'multiple';
    }

    return props;
  }

  public render(): ReactNode {
    return <AntSelect {...this.resolveProps()} />;
  }
}

(Select as any).displayName = getComponentName('select');

export default Select;
