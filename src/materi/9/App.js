import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Mapbox from '@react-native-mapbox-gl/maps';

const App = () => {

  Mapbox.setAccessToken("pk.eyJ1IjoiYWlzeW1yIiwiYSI6Ik5NbEdLVlEifQ.VbbS5FXpXZq1ASLW0LOUjg")

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView
          style={styles.map}
        >
          <Mapbox.Camera
            zoomLevel={12}
            centerCoordinate={[106.84513, -6.21462]}
          />
        </Mapbox.MapView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1
  }
});

export default App
