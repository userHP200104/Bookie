import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TableEntry = (props) => {
  return (
    <View style={styles.leaderboardContainer}>
        <View style={styles.leaderboardPositionTitle}>
          <Text style={styles.leaderboardPositionTitleText}>{props.position}</Text>
        </View>

        <View style={styles.leaderboardUsername}>
          <Text style={styles.leaderboardUsernameText}>{props.username}</Text>
        </View>

        <View style={styles.leaderboardBetsWon}>
          <Text style={styles.leaderboardBetsWonText}>{props.betsWon}</Text>
        </View>
    </View>
  )
}

export default TableEntry

const styles = StyleSheet.create({
    leaderboardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
    
      },
      leaderboardPositionTitle: {
        flex: 1,
        borderColor: '#fefefe',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 16,
      },
      leaderboardPositionTitleText: {
        fontSize: 16,
        color: '#fefefe',
        textAlign: 'center',
      },
      leaderboardUsername: {
        flex: 3,
        borderColor: '#fefefe',
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingLeft: 16,
      },
      leaderboardUsernameText: {
        fontSize: 16,
        color: '#fefefe',
      },
      leaderboardBetsWon: {
        flex: 2,
        borderColor: '#fefefe',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        paddingVertical: 16,
      },
      leaderboardBetsWonText: {
        fontSize: 16,
        color: '#fefefe',
        textAlign: 'center',
      },
})