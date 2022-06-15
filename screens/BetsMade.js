import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Button, ScrollView } from 'react-native';
import BetCard from '../components/BetCard'
import Money from '../components/Money';

import { getAllCurrentUsersBets } from '../services/Database'

export default function BetsMade() {

  const [bets, setBets] = useState([]);

  useEffect(() => {
    fetchCurrentUsersMadeBets()
  }, [])

  const fetchCurrentUsersMadeBets = async () => {
    const data = await getAllCurrentUsersBets()
    console.log(data)
    setBets(data)
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.bodyText}>My Bet</Text>


      <ScrollView style={styles.betView}>
        {bets.map((bet, index) => (
          <BetCard key={index} betName={bet.betName} wager={bet.wager} description={bet.description} isBetMade={true} />
        ))}
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'flex-start',
    backgroundColor: '#1a1a1a',
  },
  bodyText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fefefe',
    paddingLeft: 20,
    paddingBottom: 16,
    paddingTop: 30,
  },
  // title: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  betView: {
    width: '100%',
    height: 100,
    // backgroundColor: '#0f0',
    paddingHorizontal: 16,
  },
});
