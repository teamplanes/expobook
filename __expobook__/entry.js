import { KeepAwake, registerRootComponent } from 'expo';
import app from 'expobook';
// This file is imported from the users project.
import expobook from '../expobook';

if (__DEV__) {
  KeepAwake.activate();
}
registerRootComponent(app(expobook));
