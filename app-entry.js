import React from 'react';
import { Text } from 'react-native';
import { KeepAwake, registerRootComponent } from 'expo';
// import app from './app';
import ExpoBoook from '../../expobook';

// export default () => {
if (__DEV__) {
  KeepAwake.activate();
}
registerRootComponent(() => <ExpoBoook />);
// };
