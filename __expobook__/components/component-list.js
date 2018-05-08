import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import RowItem from './row-item';

const ComponentList = props => (
  <FlatList
    renderItem={({ item }) => (
      <RowItem
        componentName={item.componentName}
        onPress={() => props.navigate(`Component:${item.componentName}`)}
      />
    )}
    data={Object.keys(props.components).map((componentName, i) => ({
      key: `key-${i}`,
      componentName,
    }))}
  />
);

ComponentList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  components: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default ComponentList;
