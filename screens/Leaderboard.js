import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Button, ScrollView } from 'react-native';
import Table from '../components/TableEntry'

export default function Leaderboard() {

  const position = [1, 2, 3, 4, 5];
  let username = ['Tommy Shelby', 'Anthony Bridgerton', 'Simon Basset', 'John Crony', 'Billy Kimber'];
  let betsWon = [62, 37, 28, 19, 2];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bodyText}>Leaderboard</Text>

      <View style={styles.leaderboardTopContainer}>
        <View style={styles.leaderboardPositionTitle}>
          <Text style={styles.leaderboardPositionTitleText}>No.</Text>
        </View>

        <View style={styles.leaderboardUsername}>
          <Text style={styles.leaderboardUsernameText}>Username</Text>
        </View>

        <View style={styles.leaderboardBetsWonTitle}>
          <Text style={styles.leaderboardBetsWonTitleText}>Bets Won</Text>
        </View>

      </View>

      <ScrollView>
        {position.map((index) => (
            <Table position={position[index-1]} username={username[index-1]} betsWon={betsWon[index-1]}/>
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
    paddingBottom: 16,
    paddingTop: 60,
    paddingHorizontal: 32,
  },
  leaderboardTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,

  },
  leaderboardPositionTitle: {
    flex: 1,
    borderColor: '#fefefe',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 1,
    paddingVertical: 16,
  },
  leaderboardPositionTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fefefe',
    textAlign: 'center',
  },
  leaderboardUsername: {
    flex: 3,
    borderColor: '#fefefe',
    borderTopWidth: 2,
    borderLeftWidth: 1,
    borderBottomWidth: 2,
    borderRightWidth: 1,
    paddingVertical: 16,
    paddingLeft: 16,
  },
  leaderboardUsernameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fefefe',
  },
  leaderboardBetsWonTitle: {
    flex: 2,
    borderColor: '#fefefe',
    borderTopWidth: 2,
    borderLeftWidth: 1,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    paddingVertical: 16,
  },
  leaderboardBetsWonTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fefefe',
    textAlign: 'center',
  },
});
