import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addImageToBet } from '../services/Database'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import RequirementButton from '../components/RequirementButton';
import { async } from '@firebase/util';

export default function BetsComplete({ route }) {
  const navigation = useNavigation();

  let isBetMade = route.params.isBetMade;
  let betName = route.params.betName;
  let wager = route.params.wager;
  let description = route.params.description;
  let imageUri = route.params.image;
  let imageTaken = route.params.imageTaken;

  let data = [betName, wager];

  console.log(route.params)

  const [isUploaded, setIsUploaded] = useState(false);

  useEffect(() => {
    if(isUploaded){
      navigation.replace("Home");
    }
  }, [isUploaded])
  
  
  const saveImage = async () => {
    const filename = imageUri.substring(imageUri.lastIndexOf('/') + 1);
    const storage = getStorage();
    const imageRef = ref(storage, filename);
    
    // convert image to arrray of bytes
    const img = await fetch(imageUri);
    const bytes = await img.blob();
    
    await uploadBytes(imageRef, bytes);
    console.log("image uploaded!!!")
    // addImageToBet(filename, betName);

    setIsUploaded(true);

  }



  return (
    <SafeAreaView style={styles.container}>

      {imageTaken ? (
        <View style={styles.container}>
          <Image source={{ uri: imageUri, width: '100%', height: 100 }} style={styles.container} />
          {/* <TouchableOpacity style={styles.placeBet} onPress={saveImage}> */}
          <TouchableOpacity style={styles.placeBet} onPress={saveImage}>
            <Text style={styles.placeBetText}>Submit</Text>
          </TouchableOpacity>

        </View>
      ) : (
        <ScrollView style={styles.detailsContainer}>

          <View style={styles.title}>
            <Text style={styles.titleText}>{betName}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.detailsText}>{description}</Text>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Text style={styles.infoText}>2/1</Text>
              <Text style={styles.infoTitle}>Odds</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoText}>R{wager}</Text>
              <Text style={styles.infoTitle}>Min. Wager</Text>
            </View>
          </View>


          <View style={{ borderBottomColor: '#FF005050', borderBottomWidth: 1, marginTop: 32 }} />

          <View style={styles.requirementContainer}>
            <Text style={styles.requirementTitle}>Take a Picture</Text>
            <View style={styles.buttonsContainer}>

              <RequirementButton title="Camera" route="CameraScreen" icon="camera" isActive={false} data={data} />

            </View>
          </View>

        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  detailsContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 30,
  },
  placeBet: {
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
  placeBetText: {
    fontSize: 24,
    color: '#1a1a1a',
    paddingVertical: 16,
  },
  requirementContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  requirementTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fefefe',
    paddingHorizontal: 30,
    paddingTop: 24,
    paddingBottom: 44,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingBottom: 32,

  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {

  },
  titleText: {
    color: '#fefefe',
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    marginVertical: 20,
  },
  detailsText: {
    color: '#fefefe',
    fontSize: 16,

  },
  info: {
    paddingHorizontal: 24,
  },
  infoText: {
    fontSize: 48,
    color: '#fefefe',
  },
  infoTitle: {
    fontSize: 12,
    color: '#fefefe',
  },

});