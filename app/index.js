import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import ComponentList from './components/component-list';

const App = (props) => {
  const Navigator = StackNavigator({
    Home: {
      screen: screenProps => <ComponentList {...screenProps} {...props} />,
    },
    ...Object.keys(props.components).reduce(
      (cur, next) => ({
        ...cur,
        [`Component:${next}`]: {
          screen: props.components[next],
        },
      }),
      {},
    ),
  });
  return <Navigator />;
};

App.propTypes = {
  components: PropTypes.objectOf(PropTypes.node).isRequired,
};

export default components => () => <App components={components} />;
