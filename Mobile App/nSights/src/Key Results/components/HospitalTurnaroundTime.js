

import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, ImageBackground, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from "react-native-easy-grid";
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');



export default class HospitalTurnaroudTime extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (

      <StyleProvider style={getTheme(material)}>
        <Container>
        
         
           
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