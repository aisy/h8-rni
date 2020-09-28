import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import Firebase from './firebase';

const InsertData = () => {

  let [name, setName] = useState("");
  const addFireStore = Firebase.firestore().collection("user");

  const handleSubmit = async () => {
    let dataInsert = {
      username: name
    }

    addFireStore.add(dataInsert)
      .then(() => { console.warn("sukses") })
      .catch(error => { console.warn(error) })

    // try {
    //   await addFireStore.add(dataInsert);
    //   console.warn(`Data ${name} sudah di tambahkan`);
    // } catch (error) {
    //   console.warn(error)
    // }
  }

  return (
    <View>
      <Text>Insert Nama</Text>
      <TextInput
        placeholder="Masukkan nama"
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