import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native' //memanggil stylesheet dari React native

export default class App extends Component {
  render() {
    return (
      // menerapkan style dari varibel styles dengan object stylenya
      <View style={styles.bgColor}>
        <Text style={styles.textColor}>
          Hello, world!
        </Text>
      </View>
    );
  }
}

// pembuatan variabel styles dengan beberapa object style
const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textColor: {
    color: "white",
    fontSize: 20
  }
});