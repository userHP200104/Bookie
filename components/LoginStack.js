import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Register from '../screens/Register'
import Login from '../screens/Login'


const Tab = createMaterialTopTabNavigator();


export default function LoginStack() {
  return (
  <Tab.Navigator
    initialRouteName='Login'
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12, color: '#fefefe'},
      tabBarStyle: { backgroundColor: '#1a1a1a', paddingTop: 24},
      tabBarIndicatorStyle: { backgroundColor: '#fefefe'},
    }}
    >
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} />
  </Tab.Navigator>
  );
}

