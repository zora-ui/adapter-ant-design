import { generateShortcutMethod } from 'petals-ui/dist/message';

import { message } from 'antd';

const show = generateShortcutMethod(({ type, content, duration, onClose }) => {
  message[type || 'info']({ content, duration, onClose: () => onClose && onClose() });
});

export { show };
