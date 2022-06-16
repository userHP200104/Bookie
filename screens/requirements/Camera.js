import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addImageToBet } from '../../services/Database'

const CameraScreen = ({ route, navigation }) => {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)


  let camera = Camera;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (!camera) return
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
    navigation.navigate("Complete", {image: photo.uri, imageTaken: true});

  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        style={{ flex: 1, width: "100%" }}
        type={CameraType.back}
        ref={(r) => {
          camera = r
        }}
      ></Camera>
      <TouchableOpacity style={styles.uploadButton} onPress={takePicture}>
        <Text style={styles.uploadButtonText}>Capture</Text>
      </TouchableOpacity>
    </SafeAreaView>




  )
}

export default CameraScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButton: {
    width: '100%',
    backgroundColor: '#ff0050',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  uploadButtonText: {
    color: '#fefefe',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  thumbnail: {
    width: 300,
    height: 300,
    flex: 1,
    resizeMode: "contain"
  },

  nextButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fefefe',

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.99,
    shadowRadius: 100,

    elevation: 10,
  },
  nextButtonText: {
    fontSize: 24,
    color: '#1a1a1a',
    paddingVertical: 16,
  },
})