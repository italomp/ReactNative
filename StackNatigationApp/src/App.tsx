import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './screens/Home';
import About from './screens/About';

const {Navigator, Screen} = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Screen name='About' component={About} options={{headerShown: false}}/>
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;
