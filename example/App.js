import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Box from './components/box';
import Circle from './components/circle';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome To My Sick App 🤮</Text>
        <Box />
        <Circle />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '900',
    marginBottom: 20,
    fontSize: 20,
  },
});
