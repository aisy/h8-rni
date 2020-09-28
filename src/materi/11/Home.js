import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'

import firebase from './firebase';

const Home = ({ navigation }) => {

  const [data, setData] = useState();
  const getData = firebase.firestore().collection("user");

  useEffect(() => {
    // mengambil foto(snapshot) dari data
    getData.onSnapshot(snapshot => {
      // mapping dari snapshot yang diambil dari document
      const listItem = snapshot.docs.map(doc => ({
        id: doc.id, //mengambil id document
        key: doc.id,
        ...doc.data(), // spread data
      }))
      // memasukkan data ke state
      setData(listItem);
    })
  })

  const deteleData = firebase.firestore().collection('user');

  const deleteItems = (key) => {
    deteleData.doc(key).delete().then(() => {
      console.log("successfully deleted!");
      message.success("Berhasil menghapus");

    })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button
          title={"Masukkan Data"}
          onPress={() => navigation.navigate('Insert')}
        />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) =>
          <Card
            title={item.name}
          >
            <Button
              icon={
                <Icon
                  name="delete"
                  size={15}
                  color="white"
                />
              }
              buttonStyle={{ backgroundColor: "red" }}
              onPress={() => deleteItems(item.key)}
            />
            <Button
              icon={
                <Icon
                  name="edit"
                  size={15}
                  color="white"
                />
              }
              onPress={() => navigation.navigate('Update', { key: item.key, name: item.name })}
            />
          </Card>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  buttonWrapper: {
    marginBottom: 40
  }
})

export default Home
