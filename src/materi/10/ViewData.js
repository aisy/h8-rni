import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import Firebase from './firebase';

const ViewData = () => {

  let dataView = Firebase.firestore().collection('user');

  useEffect(() => {

    const getData = async () => {
      let listData = [];

      let data = await dataView.get();
      data.forEach(doc => {
        listData.push({
          id: doc.id,
          ...doc.data
        })
      })

      console.warn(listData);
    }

    getData();
  }, [])

  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default ViewData
