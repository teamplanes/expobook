import { KeepAwake, registerRootComponent } from 'expo';
import app from './app';
import expobook from '../../expobook';

// export default () => {
if (__DEV__) {
  KeepAwake.activate();
}
registerRootComponent(app(expobook));
// };
