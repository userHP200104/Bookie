import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation} from '@react-navigation/native';

const RequirementButton = (props) => {
    const navigation = useNavigation(); 

    let isActive = props.isActive;

  return (
      <>
      {isActive ? (
          <TouchableOpacity style={styles.requirementButtonActive} onPress={()=>navigation.navigate(props.title)}>
            <MaterialCommunityIcons name={props.icon} color='#1a1a1a' size={26} />
            <Text style={styles.requirementTextActive}>{props.title}</Text>
          </TouchableOpacity> 
      ):(
          <TouchableOpacity style={styles.requirementButton} onPress={()=>navigation.navigate(props.title)}>
            <MaterialCommunityIcons name={props.icon} color='#fefefe' size={26} />
            <Text style={styles.requirementText}>{props.title}</Text>
          </TouchableOpacity> 
      )}
    
    </>
  )
}

export default RequirementButton

const styles = StyleSheet.create({

    requirementButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fefefe',
        borderWidth: 2,
        paddingVertical: 10,
        width: 70,

    },
    requirementText: {
      fontSize: 14,
      color: '#fefefe',
      paddingTop: 16,
    },
      requirementButtonActive: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefefe',
        borderWidth: 2,
        paddingVertical: 10,
        width: 70,

      },
      requirementTextActive: {
        fontSize: 14,
        color: '#1a1a1a',
        paddingTop: 16,
      },
    
})