// import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MainStack from './components/MainStack'
import LoginStack from './components/LoginStack'

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    //<SafeAreaView>
      <NavigationContainer style={styles.container}>

        <LoginStack/>
        {/* <MainStack/> */}

      </NavigationContainer>
    //</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
