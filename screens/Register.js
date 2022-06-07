import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { ActivityIndicator, Image, TouchableOpacity, TextInput, StyleSheet, Text, View, Alert } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase'
import { createUserOnRegister } from '../services/Database';

export default function Register({navigation}) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading]=useState(false);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(!show);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [show]);

  const handleLoginPress = () =>{

    // setLoading(true);
    // Alert.alert(email+"with password" + password+"logged in" + username)
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) =>{
            //when successful
            const user = userCredentials.user;


            createUserOnRegister(user, username)
            // Alert.alert(user.uid);
            
            // navigation.replace("Login");
        })
        .catch((error)=>{
            //when failed
            Alert.alert(error.message);
        })

  }

  return (
    <View style={styles.container}>
      <Text style={{color: '#fefefe'}}>Register</Text>

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
        label={'Email'}
        value={email}
        onChangeText={setEmail}
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


      <TouchableOpacity onPress={handleLoginPress}>
        <View>
          <Text style={styles.button}>Register</Text>
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
    paddingVertical: 10,    
    alignContent: 'center',
    justifyContent: 'center',
    alignltems:'center',
    flex: 1,
    zIndex: 993,  
    marginBottom: 10,
  }
});
