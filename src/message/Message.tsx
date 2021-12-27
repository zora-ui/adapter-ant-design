import { ReactNode } from 'react';
import { MessageShortcutMethod } from 'petals-ui/dist/message';
import { MessageStructuralComponent } from '@zora/core/dist/message';

import { getComponentName } from '../basic';
import { show } from './shortcut';

class Message extends MessageStructuralComponent {
  static show: MessageShortcutMethod = show;

  public render(): ReactNode {
    return null;
  }
}

(Message as any).displayName = getComponentName('message');

export default Message;
