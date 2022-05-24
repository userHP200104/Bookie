import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../Firebase'

export default function Login({navigation: {navigate}}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(!show);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [show]);


  return (
    <View style={styles.container}>
      <Text style={{color: '#fefefe'}}>Login</Text>


      <FloatingLabelInput
        label={'Username'}
        value={username}
        onChangeText={setUsername}
        inputStyles={{
          color: '#fefefe'
        }}
        customLabelStyles={{leftFocused: -6, colorFocused: '#fefefe', colorBlurred: '#fefefe'}}
        containerStyles={styles.input}
        />

      <FloatingLabelInput
        label={'Password'}
        isPassword
        value={password}
        onChangeText={setPassword}
        customShowPasswordComponent={<Text style={{color: '#fefefe'}}>Show</Text>}
        customHidePasswordComponent={<Text style={{color: '#fefefe'}}>Hide</Text>}
        inputStyles={{
          color: '#fefefe'
        }}
        customLabelStyles={{leftFocused: -6, colorFocused: '#fefefe', colorBlurred: '#fefefe'}}
        containerStyles={styles.input}
        darkTheme={true}
      />

      <TouchableOpacity onPress={() => navigate("Register")} >
        <View>
          <Text style={styles.button}>Go to Register</Text>
        </View>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#fefefe',
    color: '#1a1a1a',
    width: 300,
    marginTop: 20,
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    flexDirection: 'row',
    color: '#fefefe',
    borderColor: '#fefefe',
    borderBottomWidth: 2,
    // paddingHorizontal: 11,
    backgroundColor: '#00000000',
    paddingTop: 10,
    paddingBottom: 10,          
    alignContent: 'center',
    justifyContent: 'center',
    alignltems:'center',
    flex: 1,
    zIndex: 993,  
    marginBottom: 10,
  }
});
