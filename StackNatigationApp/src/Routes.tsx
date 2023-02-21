import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './screens/Home';
import About from './screens/About';

const {Navigator, Screen} = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Navigator initialRouteName="Home">
                <Screen name='Home' component={Home} options={{headerShown: false}}/>
                <Screen name='About' component={About} options={{headerShown: false}}/>
            </Navigator>
        </NavigationContainer>
    );
}