import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import RowItem from './row-item';

const ComponentList = props => (
  <View>
    {Object.keys(props.components).map(componentName => (
      <RowItem
        componentName={componentName}
        onPress={() => props.navigation.navigate(`Component:${componentName}`)}
      />
    ))}
  </View>
);

ComponentList.propTypes = {
  components: PropTypes.objectOf(PropTypes.node).isRequired,
};

export default ComponentList;
