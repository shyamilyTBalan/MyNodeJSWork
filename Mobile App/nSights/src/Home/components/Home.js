


import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem, CheckBox, Button, Left, Right, Separator, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, span, StyleSheet, ScrollView, TextInput, Alert, BackHandler, Image, View, TouchableOpacity, FlatList, TouchableHighlight, Dimensions } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Login from '../../../src/Login/components/Login'
import KeyResults from '../../../src/Key Results/components/KeyResults'
import Bookmarks from '../../../src/Home/components/Bookmarks'
import Notifications from '../../../src/Home/components/Notifications'
import HospitalTurnaroundTime from '../../../src/Key Results/components/HospitalTurnaroundTime'
import ChuteTime from '../../../src/Key Results/components/ChuteTime'
import ResponseTime from '../../../src/Key Results/components/ResponseTime'
import OnSceneTime from '../../../src/Key Results/components/OnSceneTime'

import Feedback from '../../../src/Feedback/components/Feedback'

import FeedbackMain from '../../../src/Feedback/components/FeedbackMain'
import RequestFeedback from '../../../src/Feedback/components/RequestFeedback'

import GiveFeedback from '../../../src/Feedback/components/GiveFeedback'
import Pending from  '../../../src/Feedback/components/FeedbackMain'
import Requested from  '../../../src/Feedback/components/FeedbackMain'


import Profile from '../../../src/Profile/components/Profile'
import Achievements from '../../../src/Profile/components/Achievements'
import Rating_Comments from '../../../src/Profile/components/Rating_Comments'
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

  },
  {
    Ownername: 'Kate Black',
    targetuser: null,
    content: 'I noticed how kind you were to that frustrated nurse.  It was clear your kindness made her feel better.',
    datetime: '8h ago',
    likes: 16,
    comments: 6,

  },
];
const inputWidth = (Dimensions.get('screen').width - 20);
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isFocused: false,
      checkbox: false
    }
  }
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
  handleBlur = event => {
    this.textInput.clear()
    this.setState({
      isFocused: false, visible: false,
    });
    if (this.props.onBlur) {
      this.textInput.clear();
      this.props.onBlur(event);
    }
  };
  handleFocus = event => {
    this.setState({
      visible: true, isFocused: true,
    });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };
  toggleSwitch() {
    this.setState({
      checkbox: !this.state.checkbox
    });
  }
  pickerValues = (val) => {
    if (this.state.visible) {
      return (
        <View>
          <View style={{ flex: 1, paddingLeft: 15, paddingRight: 15, width: '100%', flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
            <CheckBox
              center
              color="#f7941d"
              checked={this.state.checkbox}
              onPress={() => this.toggleSwitch()}
            />
            <Text style={{ fontFamily: 'avenir light', fontSize: 12, fontWeight: 'normal', marginLeft: 15 }}>This will only be visible to you and a person you marked with @</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={this.handleBlur}>
              <Text style={styles.loginText}>Publish</Text>
            </TouchableOpacity>
          </View>
          <Separator style={{
            height: 7,
            backgroundColor: "#f3f3f3"
          }} />
        </View>
      )
    }
    else {
      return null
    }
  }

  render() {
    const user = [{
      name: 'John',
      surname: 'Doe',
      address: null,
    },
    {
      name: 'John',
      surname: 'Doe',
      address: null,
    }];

    const userName = user && user[0].name // John

    const { isFocused } = this.state;
    const { onFocus } = this.props;




    return (

      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header>
            <Left style={{ flex: 1 }}>
              <Button transparent onPress={() => this.props.navigation.navigate('Bookmarks')}>
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
              <Button transparent onPress={() => this.props.navigation.navigate('Notifications')}>
                {/* <Icon name='ios-notifications' /> */}
                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/group6.png')} />
              </Button>
            </Right>
          </Header>
          {/* <Container> */}
          <Content >
            <View
              style={[styles.viewInput, { borderColor: isFocused ? '#f7941d' : '#D1D3D4' }]}>
              <View style={{ width: '10%', marginTop: 7 }}>
                <Thumbnail small source={require('../../../assets/images/bitmap1.png')} /></View>



              <View style={{ width: '90%' }}><TextInput multiline onFocus={this.handleFocus} onBlur={this.handleBlur} ref={input => { this.textInput = input }}

                style={[styles.textInput, { borderColor: isFocused ? '#f7941d' : '#D1D3D4' }]}
                placeholderTextColor="#939598"
                placeholder="Use @ mention to recognize your teammates and give them Kudos"
              />

              </View>

            </View>

            {this.pickerValues(this.state.visible)}

            <List>
              {posts.map((data, i) => (

                <View>
                  <ListItem avatar noBorder >
                    <Left>
                      {posts[i].targetuser
                        ? <View >
                          <View style={{ zIndex: 1 }} >
                            <Thumbnail small source={require('../../../assets/images/bitmap1.png')} /></View>
                          <View style={{ zIndex: 0, marginTop: 20, position: 'absolute', marginLeft: 18 }} >
                            <Thumbnail small source={require('../../../assets/images/bitmap.png')} />
                          </View>
                        </View>
                        : <View  >
                          <Thumbnail small source={require('../../../assets/images/bitmap1.png')} /></View>
                      }

                    </Left>
                    <Body>
                      <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5, width: '100%' }}>
                        <View style={{ width: '72%' }}>
                          <Text>
                            <Text style={{ fontFamily: 'avenir light', fontWeight: "500" }}>
                              {data.Ownername} </Text>
                            {posts[i].targetuser && <Text><Text style={{ fontFamily: 'avenir light', color: '#D1D3D4' }}> to </Text>
                              <Text style={{ fontFamily: 'avenir light', fontWeight: "500" }}>
                                {data.targetuser} </Text></Text>}
                          </Text>
                        </View>
                        <View style={{ flex: 0, flexDirection: 'row', width: '28%', }}>
                          <Text note style={{ alignItems: 'flex-end', alignSelf: 'flex-end', textAlign: 'center' }} >{data.datetime}</Text>
                          <Image style={{ maxWidth: '100%', maxHeight: '100%', marginRight: 15, marginTop: 10 }} source={require('../../../assets/images/arrowDown.png')} />
                        </View>
                      </View>
                      <Content style={{ marginLeft: 5 }}>
                        <Text style={{ fontFamily: "avenir light", fontWeight: "300" }}>
                          {posts[i].targetuser && <Text style={{ color: '#F7941D', fontFamily: "avenir light" }}>{"@" + data.targetuser + ", "}</Text>}
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
const styles = StyleSheet.create({
  viewInput:
  {
    flex: 1, 
    flexDirection: 'row',
    width: inputWidth,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 5,
    paddingLeft: 10,
    borderWidth: 1
  },
  textInput: {
    height: 60, fontFamily: "avenir light", textAlignVertical: 'top'
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'column',
    alignItems: 'center',

  },
  button: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#f7941d",
  },
  loginText: {
    color: 'white',
  },
})
const HomeStack = createStackNavigator({

  Home: {

    navigationOptions: {
      header: null,
    },
    screen: Home,
  },
  Bookmarks: {
    navigationOptions: {

      header: null,
    }, screen: Bookmarks
  },
  Notifications: {
    navigationOptions: {

      header: null,
    }, screen: Notifications
  },




});
const ProfileStack = createStackNavigator({
  Profile: {
    navigationOptions: {
      header: null,
    }, screen: Profile
  },
  Achievements: {
    navigationOptions: {

      header: null,
    }, screen: Achievements
  },
  Rating_Comments: {
    navigationOptions: {

      header: null,


    }, screen: Rating_Comments
  },
})

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
      headerTitleStyle: { flex: 1, textAlign: 'center', marginLeft: -10 },
      headerTintColor: '#fff',

    }, screen: ChuteTime
  },
  ResponseTime: {
    navigationOptions: {

      title: 'Response Time',
      headerStyle: {
        backgroundColor: '#F7941D',

      },
      headerTitleStyle: { flex: 1, textAlign: 'center', marginLeft: -10 },
      headerTintColor: '#fff',

    }, screen: ResponseTime
  },
  OnSceneTime: {
    navigationOptions: ({ navigation }) => ({


      title: 'On-Scene Time',
      headerStyle: {
        backgroundColor: '#F7941D',

      },
      headerTitleStyle: { flex: 1, textAlign: 'center', marginLeft: -10 },



      headerTintColor: '#fff',

    }), screen: OnSceneTime



  },
});




const FeedbackStack = createStackNavigator({

  FeedbackMain: {
    navigationOptions: {
      title: 'FeedBack',
      headerStyle: {
        backgroundColor: '#F7941D',
      },
      headerTitleStyle: { flex: 1, textAlign: 'center', },
      headerTintColor: '#fff',
    }, screen: FeedbackMain
  },

  Feedback: {
    navigationOptions: {
      header: null,
    }, screen: Feedback
  },
  RequestFeedback: {
    navigationOptions: {
      header: null,
    }, screen: RequestFeedback
  },
  GiveFeedback: {
    navigationOptions: {
      header: null,
    }, screen: GiveFeedback
  },
  Pending: {
    screen: Pending
  },
  Requested: {
    screen: Requested
  },

});

export default createAppContainer(

  createBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      KeyResults: { screen: KeyResultsStack },
      Feedback: { screen: FeedbackStack },
      LeaderBoards: { screen: LeaderBoards },
      Profile: { screen: ProfileStack },

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