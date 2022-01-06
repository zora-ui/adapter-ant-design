import { normalizeClassName } from 'petals-ui/dist/basic';
import {
  DialogButtonProps,
  DialogShortcutCallback,
  DialogShortcutMethod,
} from 'petals-ui/dist/dialog';

import { isFunction } from '@zoras/core/dist/basic';
import { DialogShortcutType, generateAlert, generateConfirm } from '@zoras/core/dist/dialog';

import { ModalFuncProps, Modal } from 'antd';

function generateShortcut(
  shortcut: DialogShortcutType,
  generator: (callback: DialogShortcutCallback) => DialogShortcutMethod,
): DialogShortcutMethod {
  return generator(options => {
    const { type, title, content, affirmButton, denyButton, ...others } = options;

    const resolved: ModalFuncProps = {
      className: normalizeClassName(others.className),
      title,
      content: isFunction(others.render) ? others.render!() : content,
      closable: others.closable,
      centered: others.centered,
    };

    if (affirmButton) {
      const { text, className, handler } = affirmButton as DialogButtonProps;

      resolved.okText = text;

      if (className) {
        resolved.okButtonProps = { className: normalizeClassName(className) };
      }

      if (isFunction(handler)) {
        resolved.onOk = handler!;
      }
    }

    if (denyButton) {
      const { text, className, handler } = denyButton as DialogButtonProps;

      resolved.cancelText = text;

      if (className) {
        resolved.cancelButtonProps = { className: normalizeClassName(className) };
      }

      if (isFunction(handler)) {
        resolved.onCancel = handler!;
      }
    }

    if (shortcut === 'alert') {
      Modal[type || 'info'](resolved);
    } else {
      Modal.confirm(resolved);
    }
  });
}

const alert = generateShortcut('alert', generateAlert);
const confirm = generateShortcut('confirm', generateConfirm);

export { alert, confirm };
