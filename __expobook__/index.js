import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import StateRestore from './components/state-restore';
import StateSync from './components/state-sync';
import ComponentList from './components/component-list';

export const ROUTE_NAME_KEY = 'ROUTE_NAME';

const NEED_SAVE_STATE = __DEV__;

const createNavigator = components =>
  createStackNavigator({
    Home: {
      screen: (screenProps) => {
        if (NEED_SAVE_STATE) {
          return (
            <StateRestore
              navigate={screenProps.navigation.navigate}
              currentRouteName={screenProps.navigation.state.routeName}
            >
              <StateSync addListener={screenProps.navigation.addListener}>
                <ComponentList
                  navigate={screenProps.navigation.navigate}
                  components={components}
                />
              </StateSync>
            </StateRestore>
          );
        }

        return (
          <ComponentList
            navigate={screenProps.navigation.navigate}
            components={components}
          />
        );
      },
      navigationOptions: () => ({
        title: '📚',
      }),
    },
    ...Object.keys(components).reduce(
      (cur, next) => ({
        ...cur,
        [`Component:${next}`]: {
          screen: NEED_SAVE_STATE
            ? screenProps => (
              <StateSync addListener={screenProps.navigation.addListener}>
                {React.createElement(components[next])}
              </StateSync>
            )
            : components[next],

          navigationOptions: () => ({
            title: `${next}`,
          }),
        },
      }),
      {},
    ),
  });

StatusBar.setBarStyle('dark-content');

export default components => () => {
  const Navigator = createNavigator(components);
  const App = createAppContainer(Navigator);

  return <App />;
};
