import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MyButton from './MyButton';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text></Text>
        </View>
        <View style={styles.row}>
          <MyButton col="3" text="C" />
          <MyButton text="/" />
        </View>
        <View style={styles.row}>
          <MyButton text="7" />
          <MyButton text="8" />
          <MyButton text="9" />
          <MyButton text="*" />
        </View>
        <View style={styles.row}>
          <MyButton text="4" />
          <MyButton text="5" />
          <MyButton text="6" />
          <MyButton text="-" />
        </View>
        <View style={styles.row}>
          <MyButton text="1" />
          <MyButton text="2" />
          <MyButton text="3" />
          <MyButton text="+" />
        </View>
        <View style={styles.row}>
          <MyButton col="2" text="0" />
          <MyButton text="." />
          <MyButton text="=" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  }
});
