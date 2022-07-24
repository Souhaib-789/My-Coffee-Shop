import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {AntDesign} from 'react-native-vector-icons'

export default function Items({title ,price ,img ,onPress }) {

  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <View style={[styles.tc,styles.card]}>
      <Image style={styles.img} source={{uri: img}}/>
     <View style={styles.box}>
       <Text style={styles.txt}>{title}</Text>
       <Text>Price : Rs. {price}</Text>
       
     </View>
     <View style={{flexDirection:'row', margin:'5%'}}>
       <AntDesign name="star" size={18} color="orange" />
       <AntDesign name="star" size={18} color="orange" />
       <AntDesign name="star" size={18} color="orange" />
       <AntDesign name="star" size={18} color="orange" />
       <AntDesign name="star" size={18} color="orange" />
       <Icon name="shopping-cart" size={30} color="#900" style={styles.icon} />
     </View>
    
     </View>
    
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    //   justifyContent: 'center',
    },
    img: {
      width:150 ,
      height: 100,
      marginBottom: '10%',
      marginLeft: '13%'
    },
    box: {
      marginLeft: '5%',
    //   marginTop: '10%',
    //   margin: '5%',
    },
    tc: {
      elevation: 10,
      shadowColor: 'red',
    },
   
    card: {
      backgroundColor: 'white',
      borderRadius: 10,
      paddingVertical: 40,
    //   paddingHorizontal: 40,
      width: '60%',
      height: '80%',
      marginTop: '5%',
    //   marginVertical: 10,
  
    },
    icon :{
      marginLeft: '30%',
      marginBottom: '10%'
    }
  
  });
  