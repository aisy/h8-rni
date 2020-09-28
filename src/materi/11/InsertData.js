import React, { useState } from 'react'
import { View, Alert, Text } from 'react-native'
import { Input, Button } from 'react-native-elements'

import firebase from './firebase';

const InsertData = ({ navigation }) => {

  let [name, setName] = useState("")
  const AddData = firebase.firestore().collection("user");

  let handleSubmit = () => {
    //menambahkan data
    AddData.add(value)
      .then(() => {
        Alert.alert("data sudah dimasukkan atas nama " + name)
      })
      .catch(() => {
        alert("gagal di masukkan")
      })
  }

  return (
    <View>
      <Text>Insert Username</Text>
      <Input
        placeholder={"Masukkan username"}
        onChangeText={value => setName(value)}
      />
      <Button
        title={"Masukkan data"}
        onPress={handleSubmit}
      />
    </View>
  )
}

export default InsertData
