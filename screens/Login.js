import React, {useState, useEffect} from 'react';
import {  StyleSheet, Text, View, Alert, TextInput, TouchableOpacity, Image } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../Firebase'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(!show);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [show]);

  const handleLoginPress = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) =>{
        //when successful
        const user = userCredentials.user;
        // Alert.alert(user.uid);

        // navigation.replace("Home");
    })
    .catch((error)=>{
        //when failed
        Alert.alert(error.message);
    })
}

  return (
    <View style={styles.container}>
      <Text style={{color: '#fefefe'}}>Login</Text>


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
        customShowPasswordComponent={<MaterialCommunityIcons name="eye" color='#fefefe' size={26} />}
        customHidePasswordComponent={<MaterialCommunityIcons name="eye-off" color='#fefefe' size={26} />}
        inputStyles={{
          color: '#fefefe'
        }}
        customLabelStyles={{leftFocused: -6, colorFocused: '#fefefe', colorBlurred: '#fefefe'}}
        containerStyles={styles.input}
        darkTheme={true}
      />

      <TouchableOpacity onPress={handleLoginPress} >
        <View>
          <Text style={styles.button}>Login</Text>
        </View>
      </TouchableOpacity>

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
