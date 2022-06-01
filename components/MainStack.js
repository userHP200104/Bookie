import React,{useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';

import Register from '../screens/Register'
import Login from '../screens/Login'
import Home from '../screens/Home'
import BetsMade from '../screens/BetsMade'
import Leaderboard from '../screens/Leaderboard'


// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const Nav = createMaterialTopTabNavigator();

export default function MainStack() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(()=>{
//listening to if our current user is logged in
const unsubscribe=onAuthStateChanged(auth, (user)=>{
  if(user){
    //logged in
    setLoggedIn(true);
    // Alert.alert("logged in");
  }else{
    //logged out
    setLoggedIn(false);
    // Alert.alert("login pleaj");
  }
})
return unsubscribe;
  },[]);

  return (
    <>
    {loggedIn ?(
      <Tab.Navigator
        initialRouteName='Login'
        activeColor="#FF0050"
        inactiveColor="#fefefe"
        barStyle={{ backgroundColor: '#1a1a1a' }}
        >
            <Tab.Screen name="Home" component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
            />
            <Tab.Screen name="BetsMade" component={BetsMade}
            options={{
              tabBarLabel: 'BetsMade',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cash" color={color} size={26} />
              ),
            }}
            />
            <Tab.Screen name="Leaderboard" component={Leaderboard}
            options={{
              tabBarLabel: 'Leaderboard',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="podium-gold" color={color} size={26} />
              ),
            }}
            />
      </Tab.Navigator>
    ):(
        <Nav.Navigator
        initialRouteName='Login'
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12, color: '#fefefe'},
          tabBarStyle: { backgroundColor: '#1a1a1a', paddingTop: 24},
          tabBarIndicatorStyle: { backgroundColor: '#fefefe'},
        }}
        >
          <Nav.Screen name="Login" component={Login}/>
          <Nav.Screen name="Register" component={Register} />
        </Nav.Navigator>
    )}
    </>
  );
}

