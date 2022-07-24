import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, } from "react-native";
import { getAuth, signInWithEmailAndPassword } from '../Firebase-Config/firebase';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Zocial from 'react-native-vector-icons/Zocial';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function Login({ navigation }) {

 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");

 

  const Login = async () => {

   var oarr =[
     name,
     email
   ]
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      alert('Welcome in MY COFFEE SHOP ')
      navigation.navigate('Home', oarr)
      await storeData();

    } catch (err) {
      console.log(err.message)
      alert('email or password invalid !')

    }
  }

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('NAME', name)
      console.log(name)
      console.log('Data gya')
    } catch (e) {
      // saving error
    }
  }
  
 
  return (
    <View style={styles.container}>

      <Text style={styles.heading}> <AntDesign name={'login'} size={25} color={'#2b1d0e'} solid/>  Login here !</Text>

      <View style={styles.second}>

        <View style={styles.TextInput}>
        <AntDesign name={'user'} size={25} color={'#2b1d0e'} style={styles.kkl} solid/> 
        <TextInput
            style={styles.TextInputx}
            placeholder="Enter name."
            placeholderTextColor="#003f5c"
            onChangeText={(name) => setname(name)}
          />
        </View>
        <View style={styles.TextInput}>
        <Zocial name={'email'} size={25} color={'#2b1d0e'} style={styles.kkl} solid/> 
          <TextInput
            style={styles.TextInputx}
            placeholder="Enter email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          /> 
          </View>
        <View style={styles.TextInput}>
        <FontAwesome5 name={'key'} size={25} color={'#2b1d0e'} style={styles.kkl} solid/> 
          <TextInput
            style={styles.TextInputx}
            placeholder=" Enter password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={Login}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


 




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    margin: '15%',
    fontWeight: 'bold',
    color: 'black',
  },
  second: {
    backgroundColor: 'white',
    padding: 50,
    marginHorizontal: '5%',
  },
  TextInput: {
    width: 350,
    height: 50,
    backgroundColor: '#eee',
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: '10%',
    marginVertical: '5%',
    borderRadius: 10,
    elevation: 8,
    flexDirection: 'row'
  },
  kkl:{
    margin: '3%'
  },
  TextInputx: {
    fontSize: 20,
    marginLeft: '5%'
  },
  loginBtn: {
    width: 350,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: '15%',
    marginHorizontal: '10%',
    backgroundColor: "#00512D",
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  inputView:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});