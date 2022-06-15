import { StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState, useEffect} from 'react'

import { getCurrentUserMoney } from '../services/Database'



const Money = () => {

    const [money, setMoney] = useState();

    useEffect(() => {
        getMoney()
      })

    const getMoney = async () => {
        const data = await getCurrentUserMoney();
        console.log("Data: ", data);
        setMoney(data);
    }

    return (
        <View style={styles.moneyContainer}>
            <MaterialCommunityIcons name="cash" color="#fefefe" size={26} />
            <Text style={{ color: '#fefefe', paddingLeft: 6 }}>{money}</Text>
        </View>
    )
}

export default Money

const styles = StyleSheet.create({
    moneyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 20,
        paddingLeft: 16,
    }
})