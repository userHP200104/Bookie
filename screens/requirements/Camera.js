import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Camera = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Camera

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButton: {
    borderWidth: 3,
    borderColor: '#fefefe',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  uploadButtonText: {
    color: '#fefefe',
    fontSize: 16,
    fontWeight: 'bold',
  }
})