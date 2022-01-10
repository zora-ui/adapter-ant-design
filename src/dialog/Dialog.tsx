import { ReactNode } from 'react';

import { DialogButtonProps, DialogShortcutMethod } from 'petals-ui/dist/dialog';
import { isPlainObject, pick, mixin } from '@zoras/core/dist/basic';
import { DialogStructuralComponent } from '@zoras/core/dist/dialog';

import { ModalProps, Modal as AntModal } from 'antd';

import { getComponentName } from '../basic';
import { convertButtonProps } from './helper';
import { alert, confirm } from './shortcut';

class Dialog extends DialogStructuralComponent {
  static alert: DialogShortcutMethod = alert;

  static confirm: DialogShortcutMethod = confirm;

  private resolveProps(): ModalProps {
    const props: ModalProps = mixin(
      pick(this.props, [
        'title',
        'visible',
        'closable',
        'destroyOnClose',
        'width',
        'centered',
      ]),
      {
        className: this.getComponentClassNames(),
        footer: (this.props as any).footer || null,
        mask: !this.props.hideMask,
        maskClosable: !this.props.disableMask,
        onOk: this.props.onClose,
        onCancel: this.props.onClose,
      },
    );

    const { affirmButton, denyButton } = this.props;

    if (isPlainObject(affirmButton)) {
      const { text, ...affirmProps } = affirmButton as DialogButtonProps;

      props.okText = text;

      if (isPlainObject(affirmProps)) {
        props.okButtonProps = convertButtonProps(
          affirmProps as DialogButtonProps,
        );
      }
    } else {
      props.okText = affirmButton as string;
    }

    if (isPlainObject(denyButton)) {
      const { text, ...denyProps } = denyButton as DialogButtonProps;

      props.cancelText = text;

      if (isPlainObject(denyProps)) {
        props.cancelButtonProps = convertButtonProps(
          denyProps as DialogButtonProps,
        );
      }
    } else {
      props.cancelText = denyButton as string;
    }

    return props;
  }

  public render(): ReactNode {
    return <AntModal {...this.resolveProps()}>{this.props.children}</AntModal>;
  }
}

(Dialog as any).displayName = getComponentName('dialog');

export default Dialog;
