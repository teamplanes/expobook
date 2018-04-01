import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: { fontWeight: '900', fontSize: 30 },
});

const RowItem = ({ componentName, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.row}
  >
    <Text
      key={componentName}
      style={styles.text}
    >
      {componentName}
    </Text>
  </TouchableOpacity>
);

RowItem.propTypes = {
  componentName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default RowItem;
