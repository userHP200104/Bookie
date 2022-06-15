import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { useNavigation } from '@react-navigation/native';
import RequirementButton from '../components/RequirementButton'
import { auth } from "../Firebase"; //firestore instance

import { makePayment, getCurrentUserMoney } from '../services/Database'

export default function BetsPayment({ route }) {
  const navigation = useNavigation();

  let betName = route.params.betName;
  let minWager = route.params.wager;

  const [wager, setWager] = useState(route.params.wager);
  const [money, setMoney] = useState();

    useEffect(() => {
      getMoney()
    })

    const getMoney = async () => {
      const data = await getCurrentUserMoney();
      console.log("Data: ", data);
      setMoney(data);
    }

    const minWagerCheck = () => {
      if ((wager >= minWager) && (money >= wager)) {
        makePayment(wager, { betName: betName, userId: auth.currentUser.uid, wager: wager, isComplete: false }, betName);
        console.log("minWager", minWager);
        console.log("wager", wager);
        console.log("money", money);
        navigation.replace("Home");

      } else if(wager < minWager){
        Alert.alert("It seems like you did not bet enough money.");
        console.log("It seems like you did not bet enough money.");
        navigation.goBack();

      } else if(money < wager){
        Alert.alert("It seems like you do not have enough money :(");
        console.log("It seems like you do not have enough money :(");
        navigation.goBack();
      }

  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.infoText}>2/1</Text>
          <Text style={styles.infoTitle}>Odds</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>{minWager}</Text>
          <Text style={styles.infoTitle}>Min. Wager</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>

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
          customLabelStyles={{ leftFocused: -6, colorFocused: '#fefefe', colorBlurred: '#fefefe' }}
          containerStyles={styles.input}
        />

        {/* <View style={{ borderBottomColor: '#FF005050',borderBottomWidth: 1, marginTop: 20 }}/> */}

      </View>

      <View style={styles.wagerContainer}>
        <View style={styles.wager}>
          <Text style={styles.wagerText}>R {wager}</Text>
          <Text style={styles.wagerTitle}>Your Total Wager</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.payButton}
        onPress={
          () => minWagerCheck()
        }
      >
        <Text style={styles.payText}>Pay</Text>
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
  payButton: {
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
  payText: {
    fontSize: 24,
    color: '#1a1a1a',
    paddingVertical: 16,
  },
  inputContainer: {
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
    alignltems: 'center',
    zIndex: 993,
    marginBottom: 10,
  },
  infoContainer: {
    flex: 1,
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
  wagerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignltems: 'center',

  },
  wager: {
    justifyContent: 'center',
    alignltems: 'center',

  },
  wagerText: {
    fontSize: 48,
    color: '#fefefe',
    textAlign: 'center',
  },
  wagerTitle: {
    fontSize: 12,
    color: '#fefefe',
    textAlign: 'center',
  },
});
