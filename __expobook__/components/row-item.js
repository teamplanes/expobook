import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: { fontSize: 20 },
  row: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 20,
  },
});

const RowItem = ({ componentName, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.row}>
    <Text key={componentName} style={styles.text}>
      {componentName}
    </Text>
  </TouchableOpacity>
);

RowItem.propTypes = {
  componentName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default RowItem;
