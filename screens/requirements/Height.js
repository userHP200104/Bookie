import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Height = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fefefe'}}>Height</Text>
    </View>
  )
}

export default Height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
})