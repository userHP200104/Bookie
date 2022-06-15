import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Button, ScrollView } from 'react-native';

import BetCard from '../components/BetCard'

import { signOut } from 'firebase/auth';
import { getAllAvailableBets } from '../services/Database'
import { getAllMadeBets } from '../services/Database'
import { auth } from '../Firebase';
import Money from '../components/Money';

export default function Home( { navigation } ) {

  // const onSignOutPress = () => {
  //   signOut(auth).then(() => {
  //     //success
  //   })
  //     .catch((error) => {
  //       Alert.alert(error.message);
  //     })
  // }

  const [availableBets, setAvailableBets] = useState([]);
  const [madeBets, setMadeBets] = useState([]);

  useEffect(() => {
    fetchAllBets()
  }, [])

  const fetchAllBets = async () => {
    const data1 = await getAllAvailableBets()
    const data2 = await getAllMadeBets()
    console.log(data1)
    console.log(data2)
    setAvailableBets(data1)
    setMadeBets(data2)
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <SafeAreaView style={styles.header}>
        <TouchableOpacity style={styles.signOut} onPress={onSignOutPress}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </SafeAreaView> */}

      <SafeAreaView style={styles.body}>
        <ScrollView style={styles.allBetView}
          stickyHeaderIndices={[0, 2]}
        >
          <View>
            <Text style={styles.bodyText}> Available Bets</Text>
          </View>

          <ScrollView style={styles.betView} nestedScrollEnabled={true}>
          {(availableBets != 0) ? (
              availableBets.map((bet, index) => (
                <BetCard key={index} betName={bet.betName} wager={bet.wager} description={bet.description} isBetMade={false} />
              ))
            ) : (
                <TouchableOpacity style={styles.noBets} onPress={() => navigation.navigate("Create")}>
                  <Text style={styles.noBetsText}>Oh no, it seems like no-one is feeling lucky :(</Text>
                  <Text style={styles.noBetsSubText}>Click to Create your own bet.</Text>
                </TouchableOpacity>
            )}
          </ScrollView>

          <View>
            <Text style={styles.bodyText}>Bet Placed</Text>
          </View>


          <ScrollView style={styles.betView} nestedScrollEnabled={true}>
            {(madeBets != 0) ? (
              madeBets.map((bet, index) => (
                <BetCard key={index} betName={bet.betName} wager={bet.wager} description={bet.description} isBetMade={true} />
              ))
            ) : (
                <TouchableOpacity style={styles.noBets} onPress={() => navigation.replace("Home")}>
                  <Text style={styles.noBetsText}>You have no Bets Placed</Text>
                  <Text style={styles.noBetsSubText}>Click to check 'Available Bets'</Text>
                </TouchableOpacity>
            )}
          </ScrollView>
        </ScrollView>

      </SafeAreaView>
      <TouchableOpacity style={styles.makeBet} onPress={() => navigation.navigate("Create")}>
        <Text style={styles.makeBetText}>+ Make a Bet</Text>
      </TouchableOpacity>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#1a1a1a',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,

  },
  headerText: {
    fontSize: 30,
  },
  signOut: {
    fontSize: 20,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  signOutText: {
    color: '#FF0050'
  },
  body: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
    // alignItems: 'left',
    justifyContent: 'flex-start',
    // backgroundColor: '#FF0050',
  },
  bodyText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fefefe',
    // paddingLeft: 20,
    paddingBottom: 16,
    paddingTop: Platform.OS === 'ios' ? 16 : 0,
    backgroundColor: '#1a1a1a',
    borderBottomWidth: 5,
    borderBottomColor: '#FF0050'


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
  allBetView: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 16,

  },
  betView: {
    width: '100%',
    height: 'auto',
    marginTop: Platform.OS === 'ios' ? 0 : 30,

  },
  noBets: {
    borderWidth: 2,
    borderColor: '#FFbb00',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 120,

  },
  noBetsText: {
    color: "#fefefe",
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 16,
    fontWeight: 'bold',
  },
  noBetsSubText: {
    color: "#fefefe",
    textAlign: "center",
    paddingBottom: 30,
  },

});
