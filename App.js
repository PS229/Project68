import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Facebooks from '.screens/fb'
import Instagrams from '.screens/in'


export default function App() {
 
    return (
      <AppContainer/>
    )
  
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:Facebooks},
  Instagram:{screen:Instagrams}
  }
)

const AppContainer = createAppContainer(TabNavigator)

//react-navigation-tabs
//react-navigation-reanimated