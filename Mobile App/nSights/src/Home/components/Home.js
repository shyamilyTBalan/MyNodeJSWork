


import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem, Button, Left, Right, Separator, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Alert, BackHandler, Image, View, TouchableOpacity, FlatList, TouchableHighlight,Dimensions } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Login from '../../../src/Login/components/Login'
import KeyResults from '../../../src/Key Results/components/KeyResults'
import HospitalTurnaroundTime from '../../../src/Key Results/components/HospitalTurnaroundTime'
import ChuteTime from '../../../src/Key Results/components/ChuteTime'
import ResponseTime from '../../../src/Key Results/components/ResponseTime'
import OnSceneTime from '../../../src/Key Results/components/OnSceneTime'

import Feedback from '../../../src/Feedback/components/Feedback'
import Profile from '../../../src/Profile/components/Profile'
import LeaderBoards from '../../../src/Leader Boards/components/LeaderBoards'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');



const posts = [
  {
    Ownername: 'Ted Mosby',
    targetuser: 'Mary Smith',
    content: 'great job on that MVC today!  When our unit arrived we were given clear direction on which patient was ours.  It was clear you had great scene management.',
    datetime: '6h ago',
    likes: 23,
    comments: 5,

  },
  {
    Ownername: 'Kate Black',
    targetuser: 'Nick Brown',
    content: '@NikBrown, I noticed how kind you were to that frustrated nurse.  It was clear your kindness made her feel better.',
    datetime: '8h ago',
    likes: 16,
    comments: 6,

  },
  {
    Ownername: 'Nina Grek',
    targetuser: 'Ted Mosby',
    content: 'Thank you for covering my shift with such late notice.  I was able to help my family when an emergency arose.',
    datetime: '6h ago',
    likes: 20,
    comments: 4,

  },
  {
    Ownername: 'John Harris',
    targetuser: 'Nina Grek',
    content: 'thanks for leaving such a great unit this morning!  It&apos;s nice to start my day with a clean, stocked unit',
    datetime: '6h ago',
    likes: 22,
    comments: 7,

  }
  , {
    Ownername: 'Ted Mosby',
    targetuser: 'Mary Smith',
    content: 'great job on that MVC today!  When our unit arrived we were given clear direction on which patient was ours.  It was clear you had great scene management.',
    datetime: '6h ago',
    likes: 23,
    comments: 5,

  },
  {
    Ownername: 'Kate Black',
    targetuser: 'Nick Brown',
    content: '@NikBrown, I noticed how kind you were to that frustrated nurse.  It was clear your kindness made her feel better.',
    datetime: '8h ago',
    likes: 16,
    comments: 6,

  }, {
    Ownername: 'Ted Mosby',
    targetuser: 'Mary Smith',
    content: 'great job on that MVC today!  When our unit arrived we were given clear direction on which patient was ours.  It was clear you had great scene management.',
    datetime: '6h ago',
    likes: 23,
    comments: 5,

  },
  {
    Ownername: 'Kate Black',
    targetuser: 'Nick Brown',
    content: '@NikBrown, I noticed how kind you were to that frustrated nurse.  It was clear your kindness made her feel better.',
    datetime: '8h ago',
    likes: 16,
    comments: 6,

  }
];

class Home extends Component {

  componentWillUnmount() {
    Alert.alert(
      'Exit nSights',
      'Do you want to exit?',
      [
        { text: 'Cancel', onPress: () => this.props.navigation.push('Home'), style: 'cancel' },
        { text: 'OK', onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: false }
    );

  }
  render() {
    return (


      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header>
            <Left style={{ flex: 1 }}>
              <Button transparent>
                {/* <Icon name='ios-bookmark' color='#ffffff' /> */}
                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/Bookmark.png')} />
              </Button>
            </Left>
            <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Title style={{
                fontFamily: 'ARLRDBD', fontSize: 20, fontWeight: "bold",
                fontStyle: "normal",
              }}>nSights</Title>
            </Body>
            <Right style={{ flex: 1 }}>
              <Button transparent>
                {/* <Icon name='ios-notifications' /> */}
                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/group6.png')} />
              </Button>
            </Right>
          </Header>
          {/* <Container> */}
          <Content>
            <Card style={{ marginRight: 10, marginLeft: 10 }}>
              <View
                style={{ flex: 1, flexDirection: 'row', width: '90%', paddingLeft: 10 }}>
                <View style={{ width: '10%', marginTop: 7 }}>
                  <Thumbnail small source={require('../../../assets/images/bitmap1.png')} /></View>
                <View style={{ width: '100%' }}><TextInput multiline
                  style={{ height: 60, fontFamily: "avenir light", textAlignVertical: 'top' }}
                  placeholderTextColor="#939598"
                  placeholder="Use @ mention to recognize your teammates and give them Kudos"
                /></View>
              </View>
            </Card>

            <List>
              {posts.map((data, i) => (
                <View>
                  <ListItem avatar noBorder >

                    <Left>
                      <View >

                        <View style={{ zIndex: 1 }} >
                          <Thumbnail small source={require('../../../assets/images/bitmap1.png')} /></View>
                        <View style={{ zIndex: 0, marginTop: 20, position: 'absolute', marginLeft: 18 }} >
                          <Thumbnail small source={require('../../../assets/images/bitmap.png')} />
                        </View>
                      </View>
                    </Left>



                    <Body>
                      <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5, width: '100%' }}>
                        <View style={{ width: '72%' }}>
                          <Text>
                            <Text style={{ fontFamily: 'avenir light', fontWeight: "500" }}>
                              {data.Ownername} </Text>
                            <Text style={{ fontFamily: 'avenir light', color: '#D1D3D4' }}> to </Text>
                            <Text style={{ fontFamily: 'avenir light', fontWeight: "500" }}>
                              {data.targetuser} </Text>
                          </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', width: '28%' }}>
                          <Text note >{data.datetime}</Text>
                          <Image style={{ maxWidth: '100%', maxHeight: '100%', marginRight: 15, marginTop: 10 }} source={require('../../../assets/images/arrowDown.png')} />
                        </View>
                      </View>
                      <Content style={{ marginLeft: 5 }}>
                        <Text style={{ fontFamily: "avenir light", fontWeight: "300" }}>
                          <Text style={{ color: '#F7941D', fontFamily: "avenir light" }}>{"@" + data.targetuser + ", "}</Text>
                          {data.content}
                        </Text>
                      </Content>
                      <View style={{ marginLeft: 5 }}>
                        <Text>
                          <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/heart11.png')} />
                          {" "}{data.likes}{"    "}
                          <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/path.png')} />
                          {" "}{data.comments}
                        </Text>
                      </View>

                    </Body>
                    {/* <Right>
          <Text note>{data.datetime}</Text>
        </Right> */}

                  </ListItem>
                  <Separator style={{
                    height: 7,
                    backgroundColor: "#f3f3f3"
                  }} />
                </View>
              ))}
            </List>


          </Content>

        </Container>
      </StyleProvider>



    )
  }
}

const HomeStack = createStackNavigator({

  Home: {

    navigationOptions: {
      header: null,
    },
    screen: Home,
  }




});

const KeyResultsStack = createStackNavigator({
  KeyResults: {
    navigationOptions: {
      header: null,
    }, screen: KeyResults
  },
  HospitalTurnaroundTime: {
    navigationOptions: {
    
      title: 'Hospital Turnaround Time',
      headerStyle: {
        backgroundColor: '#F7941D',
      },
      headerTintColor: '#fff',
     
    }, screen: HospitalTurnaroundTime
  },
  ChuteTime: {
    navigationOptions: {
    
      title: 'Chute Time',
      headerStyle: {
        backgroundColor: '#F7941D',
       
      },
      headerTitleStyle :{flex:1, textAlign:'center',marginLeft:-10},    
      headerTintColor: '#fff',
     
    }, screen: ChuteTime
  },
  ResponseTime: {
    navigationOptions: {
    
      title: 'Response Time',
      headerStyle: {
        backgroundColor: '#F7941D',
      
      },
      headerTitleStyle :{flex:1, textAlign:'center',marginLeft:-10},    
      headerTintColor: '#fff',
     
    }, screen: ResponseTime
  },
  OnSceneTime: {
    navigationOptions:( { navigation } ) => ( {
      
     
      title: 'On-Scene Time',
      headerStyle: {
        backgroundColor: '#F7941D',
       
      },
      headerTitleStyle :{flex:1, textAlign:'center',marginLeft:-10},    
     
     
     
      headerTintColor: '#fff',
     
    }), screen: OnSceneTime


    
  },
});

export default createAppContainer(
   createBottomTabNavigator(
  {
    // Home: { screen: HomeStack },
    // Settings: { screen: SettingsStack },
    Home: { screen: Home },
    KeyResults: { screen: KeyResultsStack },
    Feedback: { screen: Feedback },
    LeaderBoards: { screen: LeaderBoards },
    Profile: { screen: Profile },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {

      activeTintColor: '#F7941D',
      inactiveTintColor: '#D1D3D4',
      style: {

        elevation: 2
      }
    },
    lazy: true,
  }
));

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;

  let iconName;
  let iconcolor;
  iconcolor = `#${focused ? 'F7941D' : 'D1D3D4'}`;

  if (routeName === 'Home') {
    iconName = `nS${focused ? '' : ''}`;

  } else if (routeName === 'KeyResults') {
    iconName = `Chart-bar${focused ? '' : ''}`;

  }
  else if (routeName === 'Feedback') {
    iconName = `Star${focused ? '' : ''}`;

  }
  else if (routeName === 'LeaderBoards') {
    iconName = `Clipboard${focused ? '' : ''}`;
  }
  else {
    iconName = `User${focused ? '' : ''}`;
  }

  return <Linericon name={iconName} size={24} color={iconcolor} />;
};