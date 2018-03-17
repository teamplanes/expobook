import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Box extends React.Component {
  render() {
    return <View style={styles.box} />;
  }
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
  },
});
