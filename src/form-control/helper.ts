import { InputNumberProps, InputProps } from 'antd';

import {
  IInputtableFormControl,
  INumericFormControl,
  ITextualFormControl,
} from 'petals-ui/dist/form-control';
import { omit, mixin } from '@zoras/core/dist/basic';

import { convertSize } from '../basic';

function resolveInputtableFormControlProps<
  PropsType extends IInputtableFormControl<any> = IInputtableFormControl<any>
>(props: Partial<PropsType>): Record<string, any> {
  return {
    name: props.name,
    value: props.value,
    size: convertSize(props.size),
    disabled: props.disabled,
    readOnly: props.readonly,
    placeholder: props.placeholder,
    allowClear: props.clearable,
    onInput: ({ target }) => props.onInput && props.onInput((target as any).value),
    onChange: ({ target }) => props.onChange && props.onChange((target as any).value),
  };
}

function resolveNumericFormControlProps<
  PropsType extends INumericFormControl = INumericFormControl
>(props: Partial<PropsType>): InputNumberProps {
  return mixin(
    omit(resolveInputtableFormControlProps(props), ['allowClear', 'onInput', 'onChange']),
    {
      step: props.step,
      max: props.max,
      min: props.min,
      onInput: text => props.onInput && props.onInput(text as any),
      onChange: value => props.onChange && props.onChange(value as any),
    },
  );
}

function resolveTextualFormControlProps<
  PropsType extends ITextualFormControl = ITextualFormControl
>(props: Partial<PropsType>): InputProps {
  return mixin(resolveInputtableFormControlProps(props), {
    maxLength: props.maxLength,
    minLength: props.minLength,
  });
}

export { resolveNumericFormControlProps, resolveTextualFormControlProps };
