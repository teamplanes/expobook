import { KeepAwake, registerRootComponent } from 'expo';
import app from './app';

const components = {};

export const addComponent = (name, component) => {
  components[name] = component;
};

export default () => {
  if (__DEV__) {
    KeepAwake.activate();
  }
  registerRootComponent(app(components));
};
