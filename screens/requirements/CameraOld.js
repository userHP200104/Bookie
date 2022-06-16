import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addImageToBet } from '../../services/Database'

const Camera = ({route, navigation}) => {

  let data = route.params.data;
  let time = new Date().getTime();
  let fileName;

  console.log("data: ", data);

  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    fileName = pickerResult.uri;
    console.log("What is this??: ", pickerResult.uri);
    
    if (pickerResult.cancelled === true) {
      return;
    }

    if (Platform.OS === 'web') {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
    } 
  };

  const addImage = async () => {
    handleImageUpload();
    addImageToBet({imageName: data.betName + '_'+ time+ '.jpg'}, );
    console.log("image uploaded??")
  }

  const handleImageUpload = () => {
    const storage = getStorage();
    const imageRef = ref(storage, 'image/' + data.betName + '_'+ time + '.jpg');

    uploadBytes(imageRef, fileName).then((snapshot) => {
      Alert.alert('Uploaded a blob or file!');
    });
  }

  if (selectedImage !== null) {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />

        <TouchableOpacity style={styles.nextButton} onPress={() => {addImage(); navigation.goBack()}}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }




  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.uploadButton} onPress={openImagePickerAsync}>
        <Text style={styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
    </SafeAreaView>
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