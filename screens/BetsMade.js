import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Button, ScrollView } from 'react-native';
import BetCard from '../components/BetCard'

export default function BetsMade() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bodyText}>BetsMade</Text>

      <ScrollView style={styles.betView}>
          <BetCard isBetMade={true}/>
          <BetCard isBetMade={true}/>
          <BetCard isBetMade={true}/>
          <BetCard isBetMade={true}/>
          <BetCard isBetMade={true}/>
        </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#1a1a1a',
  },
  bodyText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fefefe',
    paddingLeft: 20,
    paddingBottom: 16,
    paddingTop: 60,
  },
  betView: {
    width: '100%',
    height: 100,
    // backgroundColor: '#0f0',
    paddingHorizontal: 16,
  },
});
