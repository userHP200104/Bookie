import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NFC = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fefefe'}}>NFC</Text>
    </View>
  )
}

export default NFC

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
})