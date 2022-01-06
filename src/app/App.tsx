import { ReactNode } from 'react';
import { AppStructuralComponent } from '@zoras/core/dist/app';

import { getComponentName } from '../basic';

class App extends AppStructuralComponent {
  public render(): ReactNode {
    return (
      <div className={this.getComponentClassNames()}>{this.props.children}</div>
    );
  }
}

(App as any).displayName = getComponentName('app');

export default App;
