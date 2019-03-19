

import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/Home/components/Home'
import Login from './src/Login/components/Login'


const AppNavigator = createStackNavigator({


  Login: {
    navigationOptions: {
      header: null,
    },
    screen: Login,
  },

  Home: {

    navigationOptions: {
      header: null,
    },
    screen: Home,
  },

},

  {
    initialRouteName: 'Login',
  },
  { headerMode: 'none' }
);


export default createAppContainer(AppNavigator);
