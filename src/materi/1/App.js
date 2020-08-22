import React, { Component } from 'react'
import { View } from 'react-native'

import Header from '../../components/Header'
import Counter from '../../components/Counter'

export default class App extends Component {
  render() {
    return (
      <View>
        <Header title={"App"} />
        <Counter />
      </View>
    )
  }
}
