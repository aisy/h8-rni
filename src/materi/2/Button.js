import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'

export default class Button extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button title="HI" />
      </View>
    )
  }
}
