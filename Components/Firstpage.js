import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';


export default function Firstpage({ navigation }) {
    return (

        <View >
            <ImageBackground source={require('./Images/cfb069.png')} style={{ width: '100%', height: '100%' }}>
                <Image style={styles.image} source={require("./Images/mug.png")} />
                <Text style={styles.heading}>My Coffee Shop</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')} >
                        <LinearGradient colors={['#63D471', '#166D3B']} style={styles.gradient}>
                            <Text style={styles.btntxt}> Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Register')} >
                        <LinearGradient colors={['#63D471', '#166D3B']} style={styles.gradient}>
                            <Text style={styles.btntxt}> Register</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>


    );
}

const styles = StyleSheet.create({
    image: {
        marginLeft: '40%',
        marginTop: '20%',
        height: 100,
        width: 80
    },
    gradient: {
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 40,
        width: '100%',
        height:' 100%'
      },
    heading: {
        color: '#2b1d0e',
        fontSize: 40,
        fontWeight: "bold",
        marginTop: '5%',
        textAlign: 'center',
        fontFamily: 'Arial',
    },
    loginBtn: {
        width: "40%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#00512D",
        marginLeft: '6%'
    },

    row: {
        flexDirection: 'row',
        marginTop: '60%'
    },
    btntxt: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }

});