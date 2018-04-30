import { KeepAwake, registerRootComponent } from 'expo';
import app from './';

// eslint-disable-next-line import/no-unresolved, import/extensions
import expobook from '../expobook';

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(app(expobook));
