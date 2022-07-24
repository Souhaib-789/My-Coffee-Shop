import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView, FlatList } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import { db, getDocs, query, collection, addDoc } from "../Firebase-Config/firebase";
import { CartContext } from "./Context/Cart-Context";

export default function Cart() {


    //calling functions from the global context
    const { cartItems, showHideCart, showCart, removeItem, increment, decrement } = useContext(CartContext);




    const [total, settotal] = useState();
    useEffect(() => {
        settotal(cartItems.reduce((acc, curr) => acc + Number(curr.price), 0))
    }, []);


    //sending Order to firebase
    // const Order = (cartItems) => {
    //     console.log(cartItems)

    //     try {

    //         let oddo = {
    //             ITEMS: cartItems,
    //             QUANTITY: cartItems.length,
    //             TOTAL: total,
    //         }

    //         let OrderRef = collection(db, 'Order');
    //         addDoc(OrderRef, oddo);
    //         alert('Your Order has been placed successfully!')

    //     }
    //     catch (error) {
    //         const errorMessage = error.message;
    //         console.log(errorMessage);
    //     }

    // }

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            {cartItems.length == 0 ? (<View style={styles.empty}><Text style={styles.emptytxt} >Shopping cart is empty !</Text></View>)
                :
                <FlatList
                    data={cartItems}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.cartcard}>
                                <Image source={{uri: item.img}} style={styles.img} />
                                <View style={{ margin: 5 }}>
                                    <Text style={styles.txt}>{item.title}</Text>
                                    <Text style={styles.txt}>Price : {item.price}</Text>
                                </View>
                                <View style={styles.viewx}>
                                    <Entypo name={'circle-with-cross'} size={30} color={'black'} solid onPress={() => removeItem(item.id)} />
                                
                                </View>
                            </View>


                        )
                    }}
                    keyExtractor={(item) => item.id}
                />}
            <View >
                <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                    <Text style={styles.total}>TOTAL : </Text>
                    <Text style={styles.total}>{total} /-</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=> alert('Your Order has been placed successfully!')}>
                    <Text style={styles.btntxt}>ORDER NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    cartcard: {
        flexDirection: 'row',
        margin: 20,
        elevation: 10,
        shadowColor: '#00512D',
    },
    viewx: {
        flexDirection: 'row',
        marginLeft: '25%',
        marginTop: 20
    },
    img: {
        width: 90,
        height: 90,
        borderRadius: 20,
    },
    txt: {
        fontSize: 20,
        padding: 5,
        color: 'black'
    },
    oi: {
        width: 30,
        height: 30,
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: '#fff',
        textAlign: 'center',
    },

    btn: {

        marginLeft: '25%',
        marginTop: 15,
        marginBottom: 10,
        backgroundColor: '#00512D',
        width: 200,
        height: 50,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center'
    },
    btntxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    total: {
        textAlign: 'center',
        fontSize: 23,
        fontWeight: 'bold',
        color: '#382E1E',
        marginTop: '5%'

    },
    empty: {
        marginHorizontal: '10%',
        marginVertical: '30%',
    },
    emptytxt: {
        fontSize: 30, fontStyle: 'italic', textAlign: 'center'

    },
});