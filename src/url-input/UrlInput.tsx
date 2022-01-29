import { ReactNode } from 'react';
import { InputProps, Input as AntInput, Select as AntSelect } from 'antd';

import { omit, mixin } from '@zoras/core/dist/basic';
import { UrlInputStructuralComponent } from '@zoras/core/dist/url-input';

import { getComponentName } from '../basic';
import { resolveTextualFormControlProps } from '../form-control';

import { UrlInputComponentState } from './typing';
import { resolveScheme, resolvePrefix, resolveChangedValue } from './helper';

class UrlInput extends UrlInputStructuralComponent<UrlInputComponentState> {
  public readonly state: UrlInputComponentState;

  private resolveProps(): InputProps {
    const { scheme, schemes } = this.state;
    const { value = '', noAuthority, onInput, onChange } = this.props;

    const prefix = resolvePrefix(scheme, noAuthority);

    const props = mixin(
      omit(resolveTextualFormControlProps(this.props), [
        'value',
        'onInput',
        'onChange',
      ]),
      {
        value: value.replace(new RegExp(`^${prefix}`), ''),
        onInput: ({ target }) =>
          onInput &&
          onInput(resolveChangedValue(prefix, (target as any).value)),
        onChange: ({ target }) =>
          onChange &&
          onChange(resolveChangedValue(prefix, (target as any).value)),
      },
    ) as InputProps;

    if (schemes.length > 1) {
      props.addonBefore = (
        <AntSelect
          defaultValue={prefix}
          onChange={(newScheme) => {
            this.setState({ scheme: newScheme });

            if (onChange) {
              onChange(
                resolveChangedValue(
                  resolvePrefix(newScheme, noAuthority),
                  value.replace(new RegExp(`^${prefix}`), ''),
                ),
              );
            }
          }}
        >
          {schemes.map((s) => (
            <AntSelect.Option key={s} value={s}>
              {resolvePrefix(s, noAuthority)}
            </AntSelect.Option>
          ))}
        </AntSelect>
      );
    } else {
      props.prefix = prefix;
    }

    return props;
  }

  constructor(props) {
    super(props);

    const schemes = resolveScheme(props.scheme);

    this.state = { scheme: schemes[0] || 'http', schemes };
  }

  public render(): ReactNode {
    return (
      <AntInput
        className={this.getComponentClassNames()}
        {...this.resolveProps()}
      />
    );
  }
}

(UrlInput as any).displayName = getComponentName('urlInput');

export default UrlInput;
