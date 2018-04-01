import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import RowItem from './row-item';

const ComponentList = props => (
  <FlatList
    renderItem={({ item }) => (
      <RowItem
        componentName={item.componentName}
        onPress={() =>
          props.navigation.navigate(`Component:${item.componentName}`)
        }
      />
    )}
    data={Object.keys(props.components).map((componentName, i) => ({
      key: i,
      componentName,
    }))}
  />
);

ComponentList.propTypes = {
  components: PropTypes.objectOf(PropTypes.node).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ComponentList;
