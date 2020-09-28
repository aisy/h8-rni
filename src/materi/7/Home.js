import React from 'react';
import { Text, View, Button } from 'react-native';

// set parameter navigation untuk bisa melakukan navigasi
const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> ini Home </Text>

      {/* melakukan navigasi dengan onpress */}
      {/* <Button
        title={"ke halaman List"}
        onPress={() => navigation.navigate("List")}
      /> */}
    </View>
  );
}

export default Home