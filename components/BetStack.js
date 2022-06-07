import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'; //stack component

import Requirements from '../components/RequirmentsStack'
import Create from '../screens/BetsCreate'
import Detail from '../screens/BetsDetail'
import Payment from '../screens/BetsPayment'

import MainStack from '../components/MainStack'


const Stack = createNativeStackNavigator();

export default function BetStack() {

  return (

    <Stack.Navigator initialRouteName='Home'

    >

      <Stack.Screen
        name="Home"
        component={MainStack}
        options={{
          headerShown: false,
          }} />
      <Stack.Screen 
      name="Create"
      component={Requirements}
        options={{
          headerShown: false,
          
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
        }}
        />

    </Stack.Navigator>
  );
}

