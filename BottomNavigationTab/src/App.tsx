import React from 'react';
import {
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from "./Home";
import About from "./About";


const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Tab.Screen 
          name='Home' 
          component={Home} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            )
          }}/>
        <Tab.Screen 
          name='About' 
          component={About}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="business" color={color} size={size} />
            )
          }} />
      </Tab.Navigator>
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
