import { KeepAwake, registerRootComponent } from 'expo';
import app from './app';
import expobook from '../../expobook';

if (__DEV__) {
  KeepAwake.activate();
}
registerRootComponent(app(expobook));
