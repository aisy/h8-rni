import React, { useState } from 'react'
import { View, Alert, Text } from 'react-native'
import { Input, Button } from 'react-native-elements'

import firebase from './firebase';

const UpdateData = ({ navigation, route }) => {

  let [name, setName] = useState("")
  const UpdateData = firebase.firestore().collection("user");

  let handleSubmit = () => {

    const valueInput = {
      username: name
    }

    //update data
    UpdateData.doc(route.params.key)
      .update(valueInput)
      .then(() => {
        Alert.alert("data berhasil di update!")
      })
      .catch(() => {
        Alert.alert("gagal di masukkan")
      })
  }

  return (
    <View>
      <Text>Insert Username</Text>
      <Input
        placeholder={route.params.name}
        onChangeText={value => setName(value)}
      />
      <Button
        title={"Masukkan data"}
        onPress={handleSubmit}
      />
    </View>
  )
}

export default UpdateData
