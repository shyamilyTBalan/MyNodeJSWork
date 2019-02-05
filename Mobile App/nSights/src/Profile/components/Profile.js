

import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, ImageBackground, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from "react-native-easy-grid";
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');



export default class Home extends Component {

  constructor(props) {
    super(props);
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
              <Title style={{ fontFamily: "ARLRDBD", fontSize: 20, letterSpacing: 0, fontStyle: "normal", }}>Profile</Title>
            </Body>
            <Right>
              <Button transparent>
                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/001Star.png')} />
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
                      <Text style={{ fontFamily: "avenir light", fontSize: 24, color: '#B37601' }}>45</Text>
                    </View>
                    <View style={{ width: '50%' }}></View>
                    <View style={{ marginTop: 5, width: '25%', alignSelf: 'flex-start', alignItems: 'center' }}>
                      <Text style={{ fontFamily: "avenir light", fontSize: 10, color: '#B37601' }}>RECEIVED
                      </Text>
                      <Text style={{ fontFamily: "avenir light", fontSize: 24, color: '#B37601' }}>23</Text>
                    </View>
                  </ImageBackground>
                </View>
              </Row>

              <Row style={{ height: '7%', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableHighlight>
                  <Text style={{ fontFamily: "avenir light", fontSize: 13, justifyContent: 'center', alignItems: 'center' }}>
                    Change photo
               </Text>
                </TouchableHighlight>
              </Row>
            </Grid>
            <List >
              <ListItem>
                <Left>
                  <Text style={{ color: '#A7A9AC', fontFamily: "avenir light", }}>Name</Text>
                </Left>
                <Right style={{ flex: 1, width: 200 }}>
                  <Text style={{ fontFamily: "avenir light", fontSize: 18 }}> Ted Mosby</Text>
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={{ color: '#A7A9AC', fontFamily: "avenir light", }}>Profession</Text>
                </Left>
                <Right>
                  <Text style={{ fontFamily: "avenir light", fontSize: 18 }}> Doctor</Text>
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={{ color: '#A7A9AC', fontFamily: "avenir light" }}>Experience</Text>
                </Left>
                <Right>
                  <Text style={{ fontFamily: "avenir light", fontSize: 18 }}>5 years</Text>
                </Right>
              </ListItem>
            </List>
            <Grid style={{ height: 200 }}>
              <Col style={{ height: '50%', justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#f7941d" }]} >
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