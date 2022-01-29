import { ReactNode } from 'react';
import { Input as AntInput } from 'antd';
import { PasswordStructuralComponent } from '@zoras/core/dist/password';

import { getComponentName } from '../basic';
import { resolveTextualFormControlProps } from '../form-control';

class Password extends PasswordStructuralComponent {
  public render(): ReactNode {
    return (
      <AntInput.Password
        className={this.getComponentClassNames()}
        {...resolveTextualFormControlProps(this.props)}
      />
    );
  }
}

(Password as any).displayName = getComponentName('password');

export default Password;
