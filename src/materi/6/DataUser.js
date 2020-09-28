// import useContext
import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';

// import component userContext dari context
import { UserContext } from './context';

const DataUser = () => {

  // mengelola data menggunakan useContext() yang dari component Context
  // mengambil data dengan variable user, dan menambahkan data dengan variable setUser
  const { user, setUser } = useContext(UserContext);

  // gunakan useEffect untuk memasukkan data di context
  useEffect(() => {
    setUser({
      name: "Rudy",
      email: "rudy@gmail.com"
    })
  }, [setUser])

  return (
    <View>
      <Text>name:  {user.name}</Text>
    </View>
  )
}

export default DataUser
