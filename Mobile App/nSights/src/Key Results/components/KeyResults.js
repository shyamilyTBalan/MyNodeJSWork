

import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image,ImageBackground, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
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

            <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Title style={{ fontFamily: "ARLRDBD", fontSize: 20, letterSpacing: 0, fontStyle: "normal", }}>Key Results</Title>
            </Body>

          </Header>

          <Content padder style={{ backgroundColor: '#F3F3F3' }}>
            <Grid>
              <Row>
              <Col style={{marginTop:10,width:'100%',alignItems:'center'}}>
              <Text >
                Filter</Text>
              </Col>
              </Row>
              <Row>
              <Col style={{width:'100%',alignItems:'center',flex:2}}>
              <Row style={{width:'60%',alignItems:'center',justifyContent:'space-around',marginTop:10,marginBottom:10}}>
              {/* <ImageBackground source={require('../../../assets/images/all.png')} style={{ width: 31, height: 31,  }}>
              <Text>All
                </Text>
                </ImageBackground> */}
              <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/happy1.png')} />
              <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/smile2.png')} />
              <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/meh1.png')} />
             
              </Row>
              </Col>
              </Row>
              </Grid>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('HospitalTurnaroundTime')}>
              <Card >
                <CardItem padder  >               
                    <Body style={{justifyContent: 'center',flex:2}} >
                      <Text style={{ fontFamily: "avenir light",fontSize: 17, }}>Hospital Turnaround Time</Text>
                    </Body>                 
                  <Right style={{ width: '20%' }} >
                    <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/smile1.png')} />
                  </Right>                
                </CardItem>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('HospitalTurnaroundTime')}>
            <Card >
              <CardItem padder  >               
                  <Body style={{justifyContent: 'center',flex:2}} >
                    <Text style={{ fontFamily: "avenir light",fontSize: 17, }}>ChuteTime</Text>
                  </Body>                 
                <Right style={{ width: '20%' }} >
                  <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/meh.png')} />
                </Right>                
              </CardItem>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HospitalTurnaroundTime')}>
              <Card >
                <CardItem padder  >               
                    <Body style={{justifyContent: 'center',flex:2}} >
                      <Text style={{ fontFamily: "avenir light",fontSize: 17, }}>Response Time</Text>
                    </Body>                 
                  <Right style={{ width: '20%' }} >
                    <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/meh.png')} />
                  </Right>                
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('HospitalTurnaroundTime')}>
              <Card >
                <CardItem padder  >               
                    <Body style={{justifyContent: 'center',flex:2}} >
                      <Text style={{ fontFamily: "avenir light",fontSize: 17, }}>On-Scene Time</Text>
                    </Body>                 
                  <Right style={{ width: '20%' }} >
                    <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/happy.png')} />
                  </Right>                
                </CardItem>
              </Card>
            </TouchableOpacity>
          </Content>


        </Container>
      </StyleProvider>
    )
  }
}
