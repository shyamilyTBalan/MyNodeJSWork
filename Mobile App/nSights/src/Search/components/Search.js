import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {Container,Header,Button,Icon,Item,Input,Content,StyleProvider,Text} from "native-base";
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class Search extends Component {
  render() {
    return (
        <StyleProvider style={getTheme(material)}>
      <Container style={styles.container}>
        <Header searchBar rounded >
          <Item>
            <Icon active name="search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Cancel</Text>
          </Button>
        </Header>

        <Content padder>
          
            <Text>In Progress</Text>
         
        </Content>
      </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
});

