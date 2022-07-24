import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './Cart';
import Profile from './Profile';
import { Products } from "../Products";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { CartContext } from "./Context/Cart-Context";

export default function Home() {
  const Tab = createBottomTabNavigator();
  return (

     <Tab.Navigator
    screenOptions={
      ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Shopping') {
            iconName = focused
              ? "shopping-cart"
              : 'shopping-cart';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart-arrow-down' : 'cart-arrow-down';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }
          return <FontAwesome5 name={iconName} size={size} color={color} solid />;
        },
        tabBarActiveTintColor: '#00512D',
        tabBarInactiveTintColor: 'grey',
      })}
      
    >
      <Tab.Screen name="Shopping" component={Shopping}  />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function Shopping() {

  const { addToCart } = useContext(CartContext);



  return (
    <View style={{ backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Text style={styles.heading}>Order your favorite coffee</Text>
          <Text style={styles.lead}>Coffee so good, your taste buds will love it</Text>
        </View>
        <Image style={styles.image} source={require("../Images/mug.png")} />

      </View>


      <View style={{ marginTop: 20, marginBottom: 80 }}>
        <FlatList
          style={styles.FlatList}
          data={Products}
          renderItem={({ item }) => {
            return (

              <View style={styles.container}>
                <View style={[styles.tc, styles.card]}>
                  <Image style={styles.img} source={{ uri: item.img }} />
                  <View style={styles.box}>
                    <Text style={styles.txt}>{item.title}</Text>
                    <Text>Price : Rs. {item.price}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', margin: '5%' }}>
                    <FontAwesome5 name={'star'} size={18} color={'orange'} solid />
                    <FontAwesome5 name={'star'} size={18} color={'orange'} solid />
                    <FontAwesome5 name={'star'} size={18} color={'orange'} solid />
                    <FontAwesome5 name={'star'} size={18} color={'orange'} solid />
                    <FontAwesome5 name={'star'} size={18} color={'orange'} solid />
                    <TouchableOpacity style={styles.icon} onPress={() => addToCart(item)}>
                      <FontAwesome5 name={'shopping-cart'} size={25} color={'#00512D'} />
                    </TouchableOpacity>
                  </View>
                </View>


              </View>

            )
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginTop: 10,
    height: 60,
    width: 50
  },
  row: {
    flexDirection: 'row',
  },
  FlatList: {
    marginBottom: '12%',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#382E1E',
    marginLeft: 20,
    marginTop: 10,
    fontFamily: 'ms Trebuchet'
  },
  lead: {
    textAlign: 'center',
    padding: 3,
    margin: '3%',
    fontSize: 15
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 100,
    marginBottom: '10%',
    marginLeft: '13%'
  },
  box: {
    marginLeft: '5%',
  },
  tc: {
    elevation: 15,
    shadowColor: '#00512D',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 40,
    width: '60%',
    height: '80%',
  },
  txt: {
    fontWeight: 'bold',
    color: 'black'
  },
  icon: {
    marginLeft: '35%',
    marginBottom: '10%'
  }

}); 