import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Location = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fefefe'}}>Location</Text>
    </View>
  )
}

export default Location

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
})