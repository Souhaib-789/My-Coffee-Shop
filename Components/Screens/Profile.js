import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {


    useEffect(() => {
        getData();
    }, [])
    const [name, setname] = useState('')
    const [img, setimg] = useState('https://thumbs.dreamstime.com/b/silhouette-half-body-figure-person-icon-illustration-88427605.jpg')

    const selectFile = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setimg(image.path);
          
        });
    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('NAME')
            if (value !== null) {
                setname(value)
                console.log('Data agya!!!!!!!!!!!!')
            }
        } catch (e) {
            console.log(e.message)
        }
    }

  

    return (
        <View style={styles.container}>
            <Image source={{ uri:img }} style={styles.man} />
            <Text style={styles.text}>MY COFFEE SHOP</Text>
            <View style={styles.miniview}>
                <Text style={styles.lead}><FontAwesome5 name={'user'} size={20} color={'#2b1d0e'} solid />  {name}  </Text>
            </View>


            <View >
                <TouchableOpacity style={styles.btn} onPress={selectFile}>
                    <Text style={styles.btntxt}>EDIT IMAGE</Text>
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
    man: {
        height: 150,
        width: 150,
        borderRadius: 75,
        marginTop: '15%'
    },
    text: {
        margin: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',

    },
    lead: {
        fontSize: 20,
        margin: 5
    },
    miniview: {
        alignItems: 'center'
    },
    btn: {

        marginLeft: '5%',
        marginTop: 70,
        backgroundColor: '#00512D',
        width: 200,
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    btntxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }




});