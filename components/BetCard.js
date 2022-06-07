import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const BetCard = (props) => {
    const navigation = useNavigation(); 

    let bool = props.isBetMade;

    // const [betCount, setBetCount] = useState(1);

    // const increaseBetCount = () => {
    //     let count = betCount;
    //     console.log(betCount);
    //     setBetCount(count++);
    //     console.log(betCount);
    // }
    
    // const decreaseBetCount = () => {
    //     let count = betCount;
    //     console.log(betCount);
    //     setBetCount(count--);
    //     console.log(betCount);
    // }

  return (
    <View style={styles.card}>
        <View style={styles.title}>
            <Text style={styles.titleText}>Climb to the highest point in Pretoria</Text>
        </View>
        <View style={styles.info}>
            <View style={styles.odds}>
                <Text style={styles.oddsText}>2/1</Text>
                <Text style={styles.oddsTitle}>Odds</Text>
            </View>
            <View style={styles.wager}>
                <Text style={styles.wagerText}>R20</Text>
                <Text style={styles.wagerTitle}>Min. Wager</Text>
            </View>
        </View>
            <TouchableOpacity style={styles.action} onPress={()=>navigation.navigate("Detail", {isBetMade: bool})}>
                <Text style={styles.detailsButton}>tap for details</Text>
            </TouchableOpacity>
    </View>
  )
}

export default BetCard

const styles = StyleSheet.create({
    card: { 
        width: '100%',
        backgroundColor: '#1a1a1a',
        borderColor: '#fefefe',
        borderWidth: 1,
        marginBottom: 24,
        
    },
    title: {
        backgroundColor: '#fefefe'
    },
    titleText: {
        fontSize: 17,
        color: '#1a1a1a',
        textAlign: 'center',
        paddingVertical: 16,
        paddingHorizontal: 10
    },
    info: {
        flexDirection: 'row',
        height: 126,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#fefefe',
        borderWidth: 1,
    },
    odds: {
        paddingLeft: 27,
    },
    oddsText: {
        fontSize: 48,
        color: '#fefefe',
    },
    oddsTitle: {
        fontSize: 12,
        color: '#fefefe',
    },
    wager: {
        width: 100,
        height: 100,
        margin: 13,
        backgroundColor: '#fefefe',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wagerText: {
        fontSize: 32,
        color: '#1a1a1a',
    },
    wagerTitle: {
        fontSize: 12,
        color: '#1a1a1a',
    },
    action: {
        flexDirection: 'row',
        borderColor: '#fefefe',
        backgroundColor: '#1a1a1a',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 13,
    },
    detailsButton: {
        color: '#fefefe',
        fontWeight: '500',
    },
})