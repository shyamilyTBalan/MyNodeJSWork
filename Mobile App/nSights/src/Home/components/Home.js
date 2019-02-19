


import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem,Icon, CheckBox, Button, Left, Right, Separator, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, span, StyleSheet, ScrollView, TextInput, Alert, BackHandler, Image, View, TouchableWithoutFeedback, TouchableOpacity, FlatList, TouchableHighlight, Dimensions, Modal } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Login from '../../../src/Login/components/Login'
import KeyResults from '../../../src/Key Results/components/KeyResults'
import Bookmarks from '../../../src/Home/components/Bookmarks'
import Notifications from '../../../src/Home/components/Notifications'
import ReportUser from '../../../src/Home/components/ReportUser'
import HospitalTurnaroundTime from '../../../src/Key Results/components/HospitalTurnaroundTime'
import ChuteTime from '../../../src/Key Results/components/ChuteTime'
import ResponseTime from '../../../src/Key Results/components/ResponseTime'
import OnSceneTime from '../../../src/Key Results/components/OnSceneTime'
import LeaderBoards from '../../../src/Leader Boards/components/LeaderBoards'
import Feedback from '../../../src/Feedback/components/Feedback'

import FeedbackMain from '../../../src/Feedback/components/FeedbackMain'
import RequestFeedback from '../../../src/Feedback/components/RequestFeedback'

import GiveFeedback from '../../../src/Feedback/components/GiveFeedback'
import Pending from '../../../src/Feedback/components/FeedbackMain'
import Requested from '../../../src/Feedback/components/FeedbackMain'


import Profile from '../../../src/Profile/components/Profile'
import Achievements from '../../../src/Profile/components/Achievements'
import Rating_Comments from '../../../src/Profile/components/Rating_Comments'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');



const posts = [
  {
    Id: 1,
    Ownername: 'Ted Mosby',
    targetuser: null,
    content: 'Very interesting and useful',
    datetime: '6h ago',
    likes: 23,
    comments: 5,
    ImageUrl:require('../../../assets/images/ImagePost.png')

  },
  {
    Id: 2,
    Ownername: 'Kate Black',
    targetuser: 'Nick Brown',
    content: 'I noticed how kind you were to that frustrated nurse.  It was clear your kindness made her feel better.',
    datetime: '8h ago',
    likes: 16,
    comments: 6,
    ImageUrl:null,
  },
  {
    Id: 3,
    Ownername: 'Nina Grek',
    targetuser: 'Ted Mosby',
    content: 'Thank you for covering my shift with such late notice.  I was able to help my family when an emergency arose.',
    datetime: '6h ago',
    likes: 20,
    comments: 4,
    ImageUrl:null,
  },
  {
    Id: 4,
    Ownername: 'John Harris',
    targetuser: 'Nina Grek',
    content: 'thanks for leaving such a great unit this morning!  It&apos;s nice to start my day with a clean, stocked unit',
    datetime: '6h ago',
    likes: 22,
    comments: 7,
    ImageUrl:null,
  }
  , {
    Id: 5,
    Ownername: 'Ted Mosby',
    targetuser: 'Mary Smith',
    content: 'great job on that MVC today!  When our unit arrived we were given clear direction on which patient was ours.  It was clear you had great scene management.',
    datetime: '6h ago',
    likes: 23,
    comments: 5,
    ImageUrl:null,
  },
  {
    Id: 6,
    Ownername: 'Kate Black',
    targetuser: 'Nick Brown',
    content: 'I noticed how kind you were to that frustrated nurse.  It was clear your kindness made her feel better.',
    datetime: '8h ago',
    likes: 16,
    comments: 6,
    ImageUrl:null,
  }, {
    Id: 7,
    Ownername: 'Ted Mosby',
    targetuser: 'Mary Smith',
    content: 'great job on that MVC today!  When our unit arrived we were given clear direction on which patient was ours.  It was clear you had great scene management.',
    datetime: '6h ago',
    likes: 23,
    comments: 5,
    ImageUrl:null,
  },
  {
    Id: 8,
    Ownername: 'Kate Black',
    targetuser: 'Nick Brown',
    content: 'I noticed how kind you were to that frustrated nurse.  It was clear your kindness made her feel better.',
    datetime: '8h ago',
    likes: 16,
    comments: 6,
    ImageUrl:null,
  },
  {
    Id: 9,
    Ownername: 'Kate Black',
    targetuser: null,
    content: 'Very interesting and useful',
    datetime: '8h ago',
    likes: 16,
    comments: 6,
    ImageUrl:require('../../../assets/images/ImagePost.png')
  },
];
const inputWidth = (Dimensions.get('screen').width - 20);
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isFocused: false,
      checkbox: false,
      modalVisible: false,
      modalBlockVisible: false,     
      name: '',
      
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
    this.textInput.blur();
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

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }
  toggleBlockModal(visible, Id) {  
    this.setState({ name: Id });
    this.setState({ modalBlockVisible: visible });
   
  }
  render() {
    const { isFocused } = this.state;
    const { onFocus } = this.props;
    return (

      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header>
            <Left style={{ flex: 1 }}>
              <Button transparent onPress={() => this.props.navigation.navigate('Bookmarks')}>              
                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/Bookmark.png')} />
              </Button>
            </Left>
            <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Title  
               style={{
                 fontFamily: 'ArialRoundedMT', fontSize: 20, fontWeight: "bold",
                 fontStyle: "normal",
               }}>
              nSights</Title>
            </Body>
            <Right style={{ flex: 1 }}>
              <Button transparent onPress={() => this.props.navigation.navigate('Notifications')}>            
                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/group6.png')} />
              </Button>
            </Right>
          </Header>         
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
                  <ListItem avatar noBorder  key={i}>
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
                        <View style={{flex: 0, flexDirection: 'row', width: '65%' ,alignItems:'center'}}>                         
                            <Text style={{ fontFamily: 'avenir light', fontWeight: "500" }}>{data.Ownername}</Text>
                            {posts[i].targetuser && <Text><Text style={{ fontFamily: 'avenir light', color: '#D1D3D4' }}>to </Text>
                              <Text style={{ fontFamily: 'avenir light', fontWeight: "500" }}>{data.targetuser}</Text></Text>}
                         
                        </View>
                        <View style={{ flex: 2,marginRight:10, flexDirection: 'row',alignItems:'center',justifyContent:'center', width: '35%', }}>

                          <View style={{justifyContent:'flex-end',flex:1,}}><Text note style={{textAlign:'right' ,marginRight:-5}} >{data.datetime}</Text></View>
                          {posts[i].targetuser ? <View  style={{justifyContent:'flex-end'}}><TouchableOpacity onPress={() => { this.toggleModal(true) }} >
                          <Icon type='Entypo' name='chevron-small-down' size={5} style={{textAlign:'left',color: "#a7a9ac", }} />                         
                          </TouchableOpacity ></View>: <TouchableOpacity onPress={() => { this.toggleBlockModal(true, data.Ownername) }} >
                          <Icon type='Entypo' name='chevron-small-down' size={5} style={{textAlign:'right', color: "#a7a9ac",}} />
                            </TouchableOpacity >}
                        </View>                      
                      </View>
                   
                      <Content style={{ marginLeft: 5 }}>
                        <Text style={{ fontFamily: "avenir light", fontWeight: "300" }}>
                          {posts[i].targetuser && <Text style={{ color: '#F7941D', fontFamily: "avenir light" }}>{"@" + data.targetuser + ", "}</Text>}
                          {data.content}

                        </Text>
                        <View style={{ width:'95%'}}> 
                          <Image style={{ maxWidth: '100%', maxHeight: '100%', marginRight:10}} source={data.ImageUrl} />
                          </View>
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

            <Modal animationType={"slide"} transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => { console.log("Modal has been closed.") }}>
              <View style={styles.modal}>
                <View style={{ backgroundColor: '#FCFCFC', width: '85%', borderRadius: 13, marginBottom: 10 }}>
                  <TouchableOpacity style={{ marginTop: 10, marginBottom: 10 }} >
                    <Text style={styles.modalText}>Delete Post</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#FCFCFC', width: '85%', borderRadius: 13, marginBottom: 10 }}>
                  <TouchableOpacity style={{ marginTop: 10, marginBottom: 10 }} onPress={() => {
                    this.toggleModal(!this.state.modalVisible)
                  }}>
                    <Text style={[styles.modalText, { color: '#F7941D' }]}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>


            <Modal animationType={"slide"} transparent={true}
              visible={this.state.modalBlockVisible}
              onRequestClose={() => { console.log("Modal has been closed.") }}>
              <View style={styles.modal}>
                <View style={{ backgroundColor: '#FCFCFC', width: '85%', borderRadius: 13, marginBottom: 10 }}>
                  <TouchableOpacity style={{ marginTop: 10, marginBottom: 10 }} >
                    <Text style={styles.modalText}>Mute @{this.state.name}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginTop: 10, marginBottom: 10 }}  onPress={() => {this.props.navigation.navigate('ReportUser'); this.toggleBlockModal(!this.state.modalBlockVisible)}}>
                    <Text style={styles.modalText}>Report</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#FCFCFC', width: '85%', borderRadius: 13, marginBottom: 10 }}>
                  <TouchableOpacity style={{ marginTop: 10, marginBottom: 10 }} onPress={() => {
                    this.toggleBlockModal(!this.state.modalBlockVisible)
                  }}>
                    <Text style={[styles.modalText, { color: '#F7941D' }]}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}
const styles = StyleSheet.create({

  Headername: {
    fontFamily: 'ArialRoundedMT',
    fontSize: 20, 
    fontWeight: "bold",
    fontStyle: "normal",
},
  modalText: {
    textAlign: 'center',
    fontFamily: 'avenir light',
    fontSize: 20
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.4)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

  },
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

  ReportUser: {
    navigationOptions: {

      header: null,
    }, screen: ReportUser
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
      header: null,
    }, screen: HospitalTurnaroundTime
  },
  ChuteTime: {
    navigationOptions: {
      header: null,
    }, screen: ChuteTime
  },
  ResponseTime: {
    navigationOptions: {
      header: null,
    }, screen: ResponseTime
  },
  OnSceneTime: {
    navigationOptions: {
      header: null,
    }, screen: OnSceneTime
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

const LeaderBoardsStack = createStackNavigator({

  LeaderBoards: {
    navigationOptions: {
      title: 'Leader boards',
      headerStyle: {
        backgroundColor: '#F7941D',
      },
      headerTitleStyle: { flex: 1, textAlign: 'center', },
      headerTintColor: '#fff',
    }, screen: LeaderBoards
  },

});

export default createAppContainer(

  createBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      KeyResults: { screen: KeyResultsStack },
      Feedback: { screen: FeedbackStack },
      LeaderBoards: { screen: LeaderBoardsStack },
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
       
      }
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