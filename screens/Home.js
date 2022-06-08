import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Button, ScrollView } from 'react-native';

import BetCard from '../components/BetCard'

import { signOut } from 'firebase/auth';
import { getAllAvailableBets } from '../services/Database'
import { auth } from '../Firebase';

export default function Home({navigation: {navigate}}) {

  const onSignOutPress =()=>{
    signOut(auth).then(()=>{
   //success
    })
    .catch((error)=>{
      Alert.alert(error.message);
    })
   }

   const [bets, setBets] = useState([]);

   useEffect(() => {
    fetchAllAvailableBets()
    }, [])  

   const fetchAllAvailableBets = async () => {
    const data = await getAllAvailableBets()
    console.log(data)
    setBets(data)
  }

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity style={styles.signOut} onPress={onSignOutPress}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity> 
      </SafeAreaView>

      <SafeAreaView style={styles.body}>
        <Text style={styles.bodyText}> Available Bets</Text>

        <ScrollView style={styles.betView}>
          {bets.map((bet, index) => (
            <BetCard key={index} betName={bet.betName} wager={bet.wager} description={bet.description} isBetMade={false}/>
        ))}
        </ScrollView>

      </SafeAreaView>
        <TouchableOpacity style={styles.makeBet} onPress={()=>navigate("Create")}>
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
    justifyContent: 'flex-end',
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
    color: '#fefefe'
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
    paddingLeft: 20,
    paddingBottom: 16,
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
  betView: {
    width: '100%',
    height: 100,
    // backgroundColor: '#0f0',
    paddingHorizontal: 16,
  },

});
