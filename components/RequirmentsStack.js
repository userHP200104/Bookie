import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'; //stack component

import BetsCreate from '../screens/BetsCreate';
import Speed from '../screens/requirements/Speed';
import Height from '../screens/requirements/Height';
import Location from '../screens/requirements/Location';
import NFC from '../screens/requirements/NFC';


const Stack = createNativeStackNavigator();

export default function BetStack() {

  return (

    <Stack.Navigator initialRouteName='BetsCreate'>
      
      <Stack.Screen 
      name="BetsCreate"
      component={BetsCreate}
        options={{
          title: 'Make a Bet',
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
      name="Speed"
      component={Speed}
        options={{
          title: 'Set Speed',
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
        name="Height"
        component={Height}
        options={{
          title: 'Set Height',
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
        name="Location"
        component={Location}
        options={{
          title: 'Set Location',
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
          name="NFC"
          component={NFC}
          options={{
            title: 'Set Location',
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

