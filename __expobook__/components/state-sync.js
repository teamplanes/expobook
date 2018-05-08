import React from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage } from 'react-native';

import { ROUTE_NAME_KEY } from '../';

class StateSync extends React.PureComponent {
  constructor(props) {
    super(props);

    props.addListener('willFocus', ({ state }) => {
      AsyncStorage.setItem(ROUTE_NAME_KEY, state.routeName);
    });
  }

  render() {
    return this.props.children;
  }
}

StateSync.propTypes = {
  addListener: PropTypes.func.isRequired,
  children: PropTypes.node,
};

StateSync.defaultProps = {
  children: null,
};

export default StateSync;
