

import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Footer,FooterTab,Label, List, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
 import icoMoonConfig from '../../../selection.json';
 const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');
// const Icon = createIconSetFromIcoMoon(icoMoonConfig);


const posts = [
  {
    Ownername: 'Leader boards',
    targetuser: 'Mary Smith',
    content: 'great job on that MVC today! When our unit arrived we were given clear direction on which patient was ours.',
    datetime: '6h ago',
    likes: 23,
    comments: 5,

  },
  {
    Ownername: 'Leader boards',
    targetuser: 'Mary Smith',
    content: 'great job on that MVC today! When our unit arrived we were given clear direction on which patient was ours.',
    datetime: '6h ago',
    likes: 16,
    comments: 6,

  },
  {
    Ownername: 'Leader boards',
    targetuser: 'Mary Smith',
    content: 'great job on that MVC today! When our unit arrived we were given clear direction on which patient was ours.',
    datetime: '6h ago',
    likes: 20,
    comments: 4,

  },
  {
    Ownername: 'Leader boards',
    targetuser: 'Mary Smith',
    content: 'great job on that MVC today! When our unit arrived we were given clear direction on which patient was ours.',
    datetime: '6h ago',
    likes: 22,
    comments: 7,

  }
];

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
              <Title>Leader boards</Title>
            </Body>
         
          </Header>
          {/* <Container> */}
          <Content>
          <Text>
                In progress
            </Text>

          </Content>
       

        </Container>
      </StyleProvider>
          )
        }
      }
      