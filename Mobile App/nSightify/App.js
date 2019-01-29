

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



// import React from 'react';
// import { createBottomTabNavigator, 
//          createStackNavigator } from 'react-navigation';
//          import Ionicons from 'react-native-vector-icons/Ionicons';
// import Home from './src/Home/components/Home'
// import Login from './src/Login/components/Login'
// import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
// import icoMoonConfig from './selection.json';
// const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');


// export default class MyApp extends React.Component {
//    render() {
//       return(<AppTabNavigator />);
//    }
// }

// const CatalogueNavigator = createStackNavigator({
//    Catalogue: Home,
//     Category: Login,

// }, {
//     //configuration options...
// });


// const SearchNavigator = createStackNavigator({
//       SearchHome: Home,
//    SearchResults: Login
// }, {
//     //configuration options...
// });

// const AppTabNavigator = createBottomTabNavigator({
//    Catalogue: CatalogueNavigator,
//       Search: SearchNavigator,

//    },{

//      navigationOptions: ({ navigation }) => ({
//         //define the icon for each tab here...
//        tabBarIcon: ({ focused, tintColor }) => {
//       const { routeName } = navigation.state;

//       let icon;
//       switch(routeName) {
//          case 'Login':
//             icon = `ios-shop${focused ? '' : '-outline'}`;
//           break;
//           case 'Home':
//             icon = `ios-search${focused ? '' : '-outline'}`;
//           break;
//           // case 'Bag':
//           //   icon = `ios-appstore${focused ? '' : '-outline'}`;
//           // break;
//         }

//         return <Ionicons 
//                  name={icon} 
//                  size={25} 
//                  color={tintColor} />;
//        },
//      }),
//      tabBarOptions: {
//        initialRouteName: 'Login',
//        activeTintColor: '#fff',
//        inactiveTintColor: '#ddd',
//        style: {
//          backgroundColor: '#4d535e',
//       }
//    }
// });






// import React from 'react';
// import { Text, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
// import icoMoonConfig from './selection.json';
// import Home from './src/Home/components/Home'
//  import Login from './src/Login/components/Login'
//  import KeyResults from './src/Key Results/components/KeyResults'
//  import Feedback from './src/Feedback/components/Feedback'
//  import Profile from './src/Profile/components/Profile'
//  import LeaderBoards from './src/Leader Boards/components/LeaderBoards'

// const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');





// const getTabBarIcon = (navigation, focused, tintColor) => {
//   const { routeName } = navigation.state;
//   let IconComponent = Ionicons;
//   let iconName;
//   let iconcolor;
//   iconcolor = `#${focused ? 'F7941D' : 'D1D3D4'}`;

//   if (routeName === 'Home') {
//     iconName = `nS${focused ? '' : ''}`;



//   } else if (routeName === 'KeyResults') {
//     iconName = `Chart-bar${focused ? '' : ''}`;


//   }
//   else if (routeName === 'Feedback') {
//     iconName = `Star${focused ? '' : ''}`;


//   }
//   else if (routeName === 'LeaderBoards') {
//     iconName = `Clipboard${focused ? '' : ''}`;  
//   }
//   else{
//     iconName = `User${focused ? '' : ''}`;  
//   }

//   // You can return any component that you like here!
//   return   <Linericon name={iconName} size={30} color={iconcolor} />;
// };

// export default createAppContainer(
//   createBottomTabNavigator(
//     {
//       Login: { screen: Login,
//          navigationOptions:{

//         tabBarVisible: false
//       } },
//       Home: { screen: Home },
//       KeyResults: { screen: KeyResults },
//       Feedback: { screen: Feedback },
//       LeaderBoards: { screen: LeaderBoards },
//       Profile: { screen: Profile },

//     },
//     {
//       defaultNavigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ focused, tintColor }) =>
//           getTabBarIcon(navigation, focused, tintColor),
//       }),
//       tabBarOptions: {
//         initialRouteName: 'Login',
//         activeTintColor: '#F7941D',
//         inactiveTintColor: '#D1D3D4',
//         style:{
//           borderTopColor: "transparent"
//         }
//       },
//     }
//   )
// );
// import React , { Component } from 'react';

// import Login from './src/Login/components/Login'




// class App extends Component {
//   render() {
//      return (
//         <Login />
//      )
//   }
// }
// export default App