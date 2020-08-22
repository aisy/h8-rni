import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Counter extends Component {

  constructor (props) {
    super(props);

    this.state = {
      value: 0
    }
  }

  render() {

    const increment = () => {
      this.setState({
        value: this.state.value + 1
      })
    }

    const decrement = () => {
      this.setState({
        value: this.state.value - 1
      })
    }

    return (
      <View>
        <Text> {this.state.value} </Text>
        <Button onPress={increment} title={"+"} />
        <Button onPress={decrement} title={"-"} />
      </View>
    )
  }
}
