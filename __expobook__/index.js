import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import StateRestore from './components/state-restore';
import StateSync from './components/state-sync';
import ComponentList from './components/component-list';

export const ROUTE_NAME_KEY = 'ROUTE_NAME';

const NEED_SAVE_STATE = __DEV__;

const App = (props) => {
  const Navigator = StackNavigator({
    Home: {
      screen: (screenProps) => {
        if (NEED_SAVE_STATE) {
          return (
            <StateRestore
              navigate={screenProps.navigation.navigate}
              currentRouteName={screenProps.navigation.state.routeName}
            >
              <StateSync addListener={screenProps.navigation.addListener}>
                <ComponentList navigate={screenProps.navigation.navigate} {...props} />
              </StateSync>
            </StateRestore>
          );
        }

        return <ComponentList navigate={screenProps.navigation.navigate} {...props} />;
      },
      navigationOptions: () => ({
        title: '📚',
      }),
    },
    ...Object.keys(props.components).reduce(
      (cur, next) => ({
        ...cur,
        [`Component:${next}`]: {
          screen: NEED_SAVE_STATE
            ? screenProps => (
              <StateSync addListener={screenProps.navigation.addListener}>
                {React.createElement(props.components[next])}
              </StateSync>
            )
            : props.components[next],

          navigationOptions: () => ({
            title: `${next}`,
          }),
        },
      }),
      {},
    ),
  });
  StatusBar.setBarStyle('dark-content');
  return <Navigator />;
};

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  components: PropTypes.object.isRequired,
};

export default components => () => <App components={components} />;
