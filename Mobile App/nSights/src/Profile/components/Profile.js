

import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView,Dimensions,Modal, TextInput, Image, ImageBackground, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from "react-native-easy-grid";
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const profileData = 
  {
    Name: 'Ted Mosby',
    Profession: 'EMT - Basic',
    Experience: '5 years',
    Sent: 45,
    Received: 23,
   

  }

export default class Home extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    modalVisible: false,

};
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
}
  render() {
    return (

      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header>
            <Left style={{ flex: 1, }}>
            </Left>
            <Body style={{
              flex: 1, justifyContent: 'center', alignItems: 'center'
            }}>
              <Title style={{ fontFamily: "Arial Rounded MT Bold", fontSize: 20, letterSpacing: 0, fontStyle: "normal", }}>Profile</Title>
            </Body>
            <Right>
              <Button transparent onPress={() => this.props.navigation.navigate('Rating_Comments')}>
              <Linericon name='Star' size={26} color='white' />
             
              </Button>
            </Right>
          </Header>
          <Content padder>
            <Grid>
              <Row style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontFamily: 'avenir light', letterSpacing: 0, fontSize: 22, fontWeight: "500" }}>
                  Your Kudos
               </Text>
              </Row>
              <Row style={{ width: '100%', justifyContent: 'center', alignItems: 'center', }}>
                <TouchableHighlight
                  style={[styles.profileImgContainer, { justifyContent: 'center', alignItems: 'center', borderColor: '#FBC165', borderWidth: 11 }]} >
                  <Thumbnail large source={require('../../../assets/images/bitmap3.png')} style={styles.profileImg} />
                </TouchableHighlight>
                <View style={{ marginTop: 20, position: 'absolute', }} >
                  <ImageBackground source={require('../../../assets/images/strip.png')} style={{ width: 300, height: 55, flex: 1, flexDirection: 'row' }}>
                    <View style={{ marginTop: 5, width: '25%', alignSelf: 'flex-start', alignItems: 'center' }}>
                      <Text style={{ fontFamily: "avenir light", fontSize: 10, color: '#B37601' }}>SENT </Text>
                      <Text style={{ fontFamily: "avenir light", fontSize: 24, color: '#B37601' }}> {profileData.Sent}</Text>
                    </View>
                    <View style={{ width: '50%' }}></View>
                    <View style={{ marginTop: 5, width: '25%', alignSelf: 'flex-start', alignItems: 'center' }}>
                      <Text style={{ fontFamily: "avenir light", fontSize: 10, color: '#B37601' }}>RECEIVED
                      </Text>
                      <Text style={{ fontFamily: "avenir light", fontSize: 24, color: '#B37601' }}> {profileData.Received}</Text>
                    </View>
                  </ImageBackground>
                </View>
              </Row>

              <Row style={{ height: '15%', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity  onPress={() => { this.toggleModal(true) }}>
                  <Text style={{ fontFamily: "avenir light", fontSize: 13, justifyContent: 'center', alignItems: 'center' }}>
                    Change photo
               </Text>
                </TouchableOpacity>
              </Row>
            </Grid>
            <List style={{marginTop:20}}>
              <ListItem>
                <Left>
                  <Text style={{ color: '#A7A9AC', fontFamily: "avenir light", }}>Name</Text>
                </Left>
                <Right style={{ flex: 1, width: 300 }}>
                  <Text style={{ fontFamily: "avenir light", fontSize: 18 }}>  {profileData.Name}</Text>
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={{ color: '#A7A9AC', fontFamily: "avenir light", }}>Profession</Text>
                </Left>
                <Right style={{ flex: 1, width: 300 }}>
                  <Text style={{ fontFamily: "avenir light", fontSize: 18 }}>  {profileData.Profession}</Text>
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={{ color: '#A7A9AC', fontFamily: "avenir light" }}>Experience</Text>
                </Left>
                <Right style={{ flex: 1, width: 300 }}>
                  <Text style={{ fontFamily: "avenir light", fontSize: 18 }}> {profileData.Experience}</Text>
                </Right>
              </ListItem>
            </List>

            <Modal animationType={"slide"} transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { console.log("Modal has been closed.") }}>

                    <View style={styles.modal}>
                      <View style={{backgroundColor:'#FCFCFC',width:'85%',borderRadius:13,marginBottom:10}}>
                      
                         
                         
                        <TouchableOpacity style={{marginTop:10,marginBottom:10}} >
                           <Text style={styles.modalText}>Remove Current Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:10,marginBottom:10}} >
                           <Text style={styles.modalText}>Take Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:10,marginBottom:10}} >
                           <Text style={styles.modalText}>Choose from Library</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'#FCFCFC',width:'85%',borderRadius:13,marginBottom:10}}>
                        <TouchableOpacity style={{marginTop:10,marginBottom:10}} onPress={() => {
                            this.toggleModal(!this.state.modalVisible)
                        }}>
                           <Text style={[styles.modalText,{color:'#F7941D'}]}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </Modal>




            <Grid style={{ height:200,}}>
              <Col style={{ height: '50%', justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#f7941d" }]}  onPress={() => this.props.navigation.navigate('Achievements')}>
                  <Text style={{ color: 'white', fontFamily: "avenir light", fontSize: 17 }}>My achievements</Text>
                </TouchableOpacity>
              </Col>
            </Grid>
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}


const styles = StyleSheet.create({
  modalText: {
    textAlign:'center',
    fontFamily:'avenir light',
    fontSize:20
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.4)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
   
},
  profileImgContainer: {
    overflow: 'hidden',
    height: 140,
    width: 140,
    borderRadius: 70,
  },
  profileImg: {
    height: 140,
    width: 140,
    borderRadius: 70,
  },
  buttonContainer: {
    width: '100%',
    height: '45%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    height: '45%',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    borderRadius: 30,
  },
});