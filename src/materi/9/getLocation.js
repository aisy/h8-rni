import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Mapbox from '@react-native-mapbox-gl/maps';

const getLocation = () => {

  Mapbox.setAccessToken("pk.eyJ1IjoiYWlzeW1yIiwiYSI6Ik5NbEdLVlEifQ.VbbS5FXpXZq1ASLW0LOUjg")

  let [latitude, setLatitude] = useState("");
  let [longitude, setLongitude] = useState("");

  const onPress = (event) => {
    const { geometry } = event

    setLatitude(geometry.coordinates[1])
    setLongitude(geometry.coordinates[0])
  }

  const renderBuble = () => {
    return (
      <View style={styles.bubleContainer}>
        <Text>Lat: {latitude}</Text>
        <Text>Long: {longitude}</Text>
      </View>
    )
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView
          style={styles.map}
          onPress={(e) => onPress(e)}
        >
          <Mapbox.Camera
            zoomLevel={15}
            centerCoordinate={[106.827221, -6.175525]}
          />
        </Mapbox.MapView>
      </View>
      {renderBuble()}
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
  },
  bubleContainer: {
    borderRadius: 30,
    position: 'absolute',
    bottom: 16,
    left: 48,
    right: 48,
    paddingVertical: 16,
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default getLocation
