import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, Button } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'; //stack component

import Requirements from '../components/RequirmentsStack'
import Create from '../screens/BetsCreate'
import Detail from '../screens/BetsDetail'
import Payment from '../screens/BetsPayment'
import Complete from '../screens/BetsComplete'
import CameraScreen from '../screens/requirements/Camera'

import MainStack from '../components/MainStack'
import Money from '../components/Money'

import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';
import { onAuthStateChanged } from 'firebase/auth';


const Stack = createNativeStackNavigator();

export default function BetStack() {

  const onSignOutPress = () => {
    signOut(auth).then(() => {
      //success
    })
      .catch((error) => {
        Alert.alert(error.message);
      })
  }


  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    //listening to if our current user is logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //logged in
        setLoggedIn(true);
        // Alert.alert("logged in");
      } else {
        //logged out
        setLoggedIn(false);
        // Alert.alert("login pleaj");
      }
    })
    return unsubscribe;
  }, []);

  return (

    <Stack.Navigator initialRouteName='Home'

    >

      <Stack.Screen
        name="Home"
        component={MainStack}
        options={{
          // headerShown: false,
          headerStyle: {
            backgroundColor: '#1a1a1a',
          },
          headerTintColor: '#1a1a1a',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <>
              {loggedIn ? (<Money />) : null}
            </>
          ),
          headerLeft: () => (
            <>
              {loggedIn ? (
                <TouchableOpacity style={styles.signOut} onPress={onSignOutPress}>
                  <Text style={styles.signOutText}>Sign Out</Text>
                </TouchableOpacity>
              ) : null}
            </>

          ),
        }} />

      <Stack.Screen
        name="Create"
        component={Requirements}
        options={{
          // headerShown: false,
          title: 'Make a Bet',
          headerStyle: {
            backgroundColor: '#1a1a1a',
          },
          headerTintColor: '#fefefe',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Money />
          ),

        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: '#1a1a1a',
          },
          headerTintColor: '#fefefe',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Money />
          ),
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          title: 'Place Bet',
          headerStyle: {
            backgroundColor: '#1a1a1a',
          },
          headerTintColor: '#fefefe',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Money />
          ),
        }}
      />
      <Stack.Screen
        name="Complete"
        component={Complete}
        options={{
          title: 'Complete Bet',
          headerStyle: {
            backgroundColor: '#1a1a1a',
          },
          headerTintColor: '#fefefe',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Money />
          ),
        }}
      />  
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          title: 'Upload an Image or Video',
          headerStyle: {
            backgroundColor: '#1a1a1a',
          },
          headerTintColor: '#fefefe',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Money />
          ),
        }}
      />  

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  signOut: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 20,
    paddingLeft: 16,
  },
  signOutText: {
    color: '#FF0050',

  },

});
