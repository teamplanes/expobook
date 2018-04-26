import React from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage } from 'react-native';

import { ROUTE_NAME_KEY } from '../';

class StateRestore extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      name: undefined,
    };
  }

  componentDidMount() {
    AsyncStorage
      .getItem(ROUTE_NAME_KEY)
      .then((name) => {
        if (name !== this.props.currentRouteName && name !== null) {
          requestIdleCallback(() => this.props.navigate(name));
        }

        this.setState({ name });
      });
  }

  render() {
    if (this.state.name === undefined) {
      return null;
    }

    return this.props.children;
  }
}

StateRestore.propTypes = {
  navigate: PropTypes.func.isRequired,
  currentRouteName: PropTypes.string.isRequired,
  children: PropTypes.node,
};

StateRestore.defaultProps = {
  children: null,
};

export default StateRestore;
