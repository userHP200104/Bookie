import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import BetsMade from '../screens/BetsMade'
import Leaderboard from '../screens/Leaderboard'


const Tab = createBottomTabNavigator();

export default function MainStack() {
  return (
  <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Tab.Screen name="BetsMade" component={BetsMade} />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
  </Tab.Navigator>
  );
}

