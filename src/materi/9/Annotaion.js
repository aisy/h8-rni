import React from 'react'
import { View, StyleSheet } from 'react-native';
import Mapbox from '@react-native-mapbox-gl/maps';

const Annotaion = () => {

  Mapbox.setAccessToken("pk.eyJ1IjoiYWlzeW1yIiwiYSI6Ik5NbEdLVlEifQ.VbbS5FXpXZq1ASLW0LOUjg");

  const Listcoordinates = [
    [-73.98330688476561, 40.76975180901395],
    [-73.96682739257812, 40.761560925502806],
    [-74.00751113891602, 40.746346606483826],
    [-73.95343780517578, 40.7849607714286],
    [-73.99017333984375, 40.71135347314246],
    [-73.98880004882812, 40.758960433915284],
    [-73.96064758300781, 40.718379593199494],
    [-73.95172119140624, 40.82731951134558],
    [-73.9829635620117, 40.769101775774935],
    [-73.9822769165039, 40.76273111352534],
    [-73.98571014404297, 40.748947591479705]
  ]

  const renderAnnotasions = () => {
    const items = []
    for (let i = 0; i < Listcoordinates.length; i++) {
      const title = `Longitude: ${Listcoordinates[i][0]} Latitude: ${Listcoordinates[i][1]}`;
      const id = `pointAnnotation${i}`;
      items.push(
        <Mapbox.PointAnnotation
          key={id}
          id={id}
          coordinate={Listcoordinates[i]}
          title={title}
        />
      )
    }
    return items
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView
          style={styles.map}
        >
          <Mapbox.Camera
            zoomLevel={10}
            centerCoordinate={Listcoordinates[0]}
          />
          {renderAnnotasions()}
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
  },
  marker: {
    flex: 1,
    resizeMode: 'contain',
    width: 25,
    height: 25
  }
});

export default Annotaion
