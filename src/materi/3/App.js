import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';
import Counter from '../../components/Counter';

const App = () => {
  return (
    <View>
      <Header title={"Hacktiv 8"} />
      <Counter />
    </View>
  )
}

export default App
