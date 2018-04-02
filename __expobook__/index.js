import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ComponentList from './components/component-list';

const App = (props) => {
  const Navigator = StackNavigator({
    Home: {
      screen: screenProps => <ComponentList {...screenProps} {...props} />,
      navigationOptions: () => ({
        title: '📚',
      }),
    },
    ...Object.keys(props.components).reduce(
      (cur, next) => ({
        ...cur,
        [`Component:${next}`]: {
          screen: props.components[next],
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
