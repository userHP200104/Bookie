import React,{useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'; //stack component


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';

import Create from '../screens/BetsCreate'
import Detail from '../screens/BetsDetail'
import Payment from '../screens/BetsPayment'

import MainStack from '../components/MainStack'


const Stack = createNativeStackNavigator();

export default function BetStack() {

  return (
    
    <Stack.Navigator initialRouteName='Home'>

      <Stack.Screen name="Home" component ={MainStack} options={{headerShown: false}}/>
      <Stack.Screen name="Create" component ={Create}/>
      <Stack.Screen name="Detail" component ={Detail}/>
      <Stack.Screen name="Payment" component ={Payment}/>

  </Stack.Navigator>
  );
}

