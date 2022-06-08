import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react'
import MapView, { Marker } from 'react-native-maps';

const Location = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  )
}

export default Location

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})