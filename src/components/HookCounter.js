import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const HookCounter = () => {

  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  }

  const decrement = () => {
    setValue(value - 1);
  }

  return (
    <View>
      <Text>{value}</Text>
      <Button onPress={increment} title={"+"} />
      <Button onPress={decrement} title={"-"} />
    </View>
  )
}

export default HookCounter;