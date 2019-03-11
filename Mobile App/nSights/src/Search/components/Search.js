import React, { Component } from "react";
import {Container,Header,Button,Icon,Item,Tab, Tabs,Input,Content,StyleProvider,Text} from "native-base";
import { Platform, StyleSheet, ScrollView, TextInput, Image, View, TouchableOpacity, FlatList,ImageBackground, Dimensions, TouchableHighlight } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';


const rowWidth = (Dimensions.get('screen').width);

export default class Search extends Component {
  render() {
    return (
        <StyleProvider style={getTheme(material)}>
      <Container style={styles.container}>
        <Header searchBar rounded >
          <Item style={{width: '70%'}}>
            <Icon active name="search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent style={{width: '30%', height: '100%'}}>
            <Text>Cancel</Text>
          </Button>
        </Header>

        {/* <Content padder> */}
          
            {/* <Text>In Progress</Text> */}
            <Tabs tabContainerStyle={{ width: rowWidth }}>
            <Tab heading="TOP">
              <Top  />
            </Tab>
            <Tab heading="PEOPLE">
              <People  />
            </Tab>
            <Tab heading="TAGS" >
              <Tags  />
            </Tab>
            <Tab heading="PLACES" >
              <Places />
            </Tab>
          </Tabs>
         
        {/* </Content> */}
      </Container>
      </StyleProvider>
    );
  }
}


class Top extends Component {
  render() {

    return (
      <Container >
        <Content>
        <Text>In Progress</Text>
        </Content>
        </Container>
    )
  }
}

class People extends Component {
  render() {

    return (
      <Container >
        <Content>
        <Text>In Progress</Text>
        </Content>
        </Container>
    )
  }
}

class Tags extends Component {
  render() {

    return (
      <Container >
        <Content>
        <Text>In Progress</Text>
        </Content>
        </Container>
    )
  }
}

class Places extends Component {
  render() {

    return (
      <Container >
        <Content>
        <Text>In Progress</Text>
        </Content>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
});

