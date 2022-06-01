import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Button } from 'react-native';

import { signOut } from 'firebase/auth';
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

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.header}>
        {/* <Text style={styles.headerText}>Home</Text> */}
        <Button
          title="sign out"
          onPress={onSignOutPress}
          style={styles.signOut}
          color="#fefefe"
        />
      </SafeAreaView>

      <SafeAreaView style={styles.body}>
        <Text style={styles.bodyText}> Available Bets</Text>
      </SafeAreaView>

        <TouchableOpacity style={styles.makeBet} onPress={()=>navigate("Create")}>
          <Text style={styles.makeBetText}>+ Make a Bet</Text>
        </TouchableOpacity> 

      <StatusBar style="auto" />
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
  },
  body: {
    flex: 1,
    width: '100%',
    alignItems: 'left',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    // backgroundColor: '#FF0050',
  },
  bodyText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fefefe',
    paddingLeft: 20,
  },
  makeBet: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    backgroundColor: '#fefefe'
  },
  makeBetText: {
    fontSize: 24,
    color: '#1a1a1a',
    paddingVertical: 16,
  },
});
