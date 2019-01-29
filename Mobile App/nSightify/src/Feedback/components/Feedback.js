import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Label, List, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';

const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

export default class Feedback extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header>
            <Left style={{ flex: 1 }}>
              <Button transparent>
                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/Path1.png')} />
              </Button>
            </Left>
            <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Title style={{
                fontFamily: 'ARLRDBD', fontSize: 20, fontWeight: "bold",
                fontStyle: "normal",
              }}>Feedback</Title>
            </Body>
            <Right style={{ flex: 1 }}>
              <Text style={{ color: '#FFFFFF', fontFamily: 'ARLRDBD' }}>Done</Text>
            </Right>
          </Header>
          <Content>
            <List>
              <ListItem>
                <Grid >
                  <Col style={{ width: '35%' }}>
                    <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/bitmap3.png')} />
                  </Col>
                  <Col style={{ flexDirection: 'column', width: '65%', justifyContent: "flex-start", alignSelf: "flex-start" }}>
                    <Row>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 22, fontWeight: "500" }}>Jennifer Aniston </Text>
                    </Row>
                    <Row>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                      </View>
                    </Row>
                    <Row>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 16, fontWeight: 'normal' }}>EMT-Paramedic</Text>
                    </Row>
                    <Row>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 16, fontWeight: 'normal' }}>3 year experience</Text>
                    </Row>
                  </Col>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid>
                  <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'avenir light', fontSize: 16, fontWeight: "500" }}>Put your estimates</Text>
                  </Row>
                  <Row>
                    <Left>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "normal" }}>Professionalism</Text>
                    </Left>
                    <Right>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                      </View>
                    </Right>
                  </Row>
                  <Row>
                    <Left>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "normal" }}>Patient Care</Text>
                    </Left>
                    <Right>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                      </View>
                    </Right>
                  </Row>
                  <Row>
                    <Left>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "normal" }}>Team Work</Text>
                    </Left>
                    <Right>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                      </View>
                    </Right>
                  </Row>
                  <Row>
                    <Left>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "normal" }}>Attitude</Text>
                    </Left>
                    <Right>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                      </View>
                    </Right>
                  </Row>
                  <Row>
                    <Left>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "normal" }}>Leadership</Text>
                    </Left>
                    <Right>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                      </View>
                    </Right>
                  </Row>

                </Grid>
              </ListItem>
            </List>
          </Content>
        </Container>
      </StyleProvider>
    )
  }


}