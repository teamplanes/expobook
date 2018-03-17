import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Circle extends React.Component {
  render() {
    return <View style={styles.circle} />;
  }
}

const styles = StyleSheet.create({
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'tomato',
  },
});
