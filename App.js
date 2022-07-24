import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Components/Sign/Login';
import Register from './Components/Sign/Register';
import Firstpage from './Components/Firstpage';
import Home from './Components/Screens/Home';
import ContextFunction from './Components/Screens/Context/Cart-Context';

export default function App() {


  const Stack = createNativeStackNavigator();


  return (
    <ContextFunction>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Firstpage" component={Firstpage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />


      </Stack.Navigator>
    </NavigationContainer>
    </ContextFunction>
  );
}