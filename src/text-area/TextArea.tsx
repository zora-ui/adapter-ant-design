import { ReactNode } from 'react';
import { Input as AntInput } from 'antd';
import { TextAreaStructuralComponent } from '@zoras/core/dist/text-area';

import { getComponentName } from '../basic';
import { resolveTextualFormControlProps } from '../form-control';

class TextArea extends TextAreaStructuralComponent {
  public render(): ReactNode {
    return (
      <AntInput.TextArea
        className={this.getComponentClassNames()}
        rows={this.props.rows}
        showCount={this.props.showWordage}
        {...(resolveTextualFormControlProps(this.props) as Record<string, any>)}
      />
    );
  }
}

(TextArea as any).displayName = getComponentName('textArea');

export default TextArea;
