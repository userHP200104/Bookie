import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Speed = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fefefe'}}>Speed</Text>
    </View>
  )
}

export default Speed

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
})