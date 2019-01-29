

import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from "react-native-easy-grid";
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');
// const Icon = createIconSetFromIcoMoon(icoMoonConfig);



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
              <Title>Profile</Title>
            </Body>

          </Header>
          {/* <Container> */}
          <Content padder>
            <Grid>
              <Row style={{ alignItems: 'center' }}>
                <Text style={{ fontFamily: "avenir light", fontSize: 20, fontWeight: "500", }}>
                  Your Kudos
               </Text>
              </Row>
              <Row>
                <Col style={{ width: '25%' }}>
                </Col>
                <Col style={{ width: '50%' }}>
                  <TouchableHighlight
                    style={[styles.profileImgContainer, { borderColor: '#FBC165', borderWidth: 11 }]}
                  >
                    <Thumbnail large source={require('../../../assets/images/bitmap3.png')} style={styles.profileImg} />
                    {/* <Image source={require('../../../assets/images/bitmap3.png' )} style={styles.profileImg} /> */}
                  </TouchableHighlight>
                </Col>
                <Col style={{ width: '25%' }}>
                </Col>
              </Row>
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
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  profileImg: {
    // overflow: 'hidden',
    height: 120,
    width: 120,
    borderRadius: 60,
  },
});