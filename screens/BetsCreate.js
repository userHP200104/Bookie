import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { useNavigation} from '@react-navigation/native';

import RequirementButton from '../components/RequirementButton';


export default function BetsCreate() {
  const navigation = useNavigation(); 

  const [betName, setBetName] = useState('');
  const [wager, setWager] = useState('');
  const [description, setDescription] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.inputContainer}>
        <FloatingLabelInput
          label={'Bet Name'}
          value={betName}
          onChangeText={setBetName}
          inputStyles={{
            color: '#fefefe'
          }}
          customLabelStyles={{leftFocused: -6, colorFocused: '#fefefe', colorBlurred: '#fefefe'}}
          containerStyles={styles.input}
          />

        <FloatingLabelInput
          label={'Wager'}
          value={wager}
          onChangeText={setWager}
          mask="currency"
          currencyDivider="."
          keyboardType="numeric"
          inputStyles={{
            color: '#fefefe'
          }}
          customLabelStyles={{leftFocused: -6, colorFocused: '#fefefe', colorBlurred: '#fefefe'}}
          containerStyles={styles.input}
          />

        <FloatingLabelInput
          label={'Description'}
          value={description}
          onChangeText={setDescription}
          inputStyles={{
            color: '#fefefe'
          }}
          customLabelStyles={{leftFocused: -6, colorFocused: '#fefefe', colorBlurred: '#fefefe'}}
          containerStyles={styles.input}
          />

        <View style={{ borderBottomColor: '#FF005050',borderBottomWidth: 1, marginTop: 20 }}/>
        
      </View>


      <View style={styles.requirementContainer}>
        <Text style={styles.requirementTitle}>Select Bet Requiremnets</Text>
        <View style={styles.buttonsContainer}>
          
          <RequirementButton title="Speed" icon="speedometer" isActive={false}/>
          <RequirementButton title="Height" icon="altimeter" isActive={false}/>
          <RequirementButton title="Location" icon="map-marker" isActive={false}/>
          <RequirementButton title="NFC" icon="nfc" isActive={false}/>

        </View>
      </View>

      <TouchableOpacity style={styles.makeBet} onPress={()=>navigation.replace("Home")}>
          <Text style={styles.makeBetText}>+ Make a Bet</Text>
      </TouchableOpacity> 
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
  inputContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 30,
  },
  input: {
    flexDirection: 'row',
    color: '#fefefe',
    borderColor: '#fefefe',
    borderBottomWidth: 2,
    // paddingHorizontal: 11,
    backgroundColor: '#00000000',
    paddingVertical: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignltems:'center',
    flex: 1,
    zIndex: 993,  
    marginBottom: 10,
  },
  makeBet: {
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
  makeBetText: {
    fontSize: 24,
    color: '#1a1a1a',
    paddingVertical: 16,
  },
  requirementContainer:{
    flex: 1,
  },
  requirementTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fefefe',
    paddingHorizontal: 30,
    paddingBottom: 44,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,

  },
});
