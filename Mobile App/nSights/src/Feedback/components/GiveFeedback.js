
import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Label, List, ListItem, Button, Icon, Left, Right, Body, CheckBox, StyleProvider, Form, Card, Picker, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import SearchInput, { createFilter } from 'react-native-search-filter';

const ann = require("../../../assets/images/userpic1.png");
const john = require("../../../assets/images/userpic2.png");
const kate = require("../../../assets/images/userpic3.png");
const ted = require("../../../assets/images/bitmap.png");
const mary = require("../../../assets/images/bitmap1.png");
const KEYS_TO_FILTERS = ['name'];
const datas1 = [
  {
    img: ann,
    name: "Ann Davis",
    note: "EMT-Basic"
  },
  {
    img: john,
    name: "John Harris",
    note: "Critical Care Paramedic"
  },
  {
    img: kate,
    name: "Kate White",
    note: "EMT-Paramedic"
  },
  {
    img: mary,
    name: "Mary-Kate Washington",
    note: "EMT-Basic"
  },
  {
    img: ted,
    name: "Ted Mosby",
    note: "EMT-Paramedic"
  },
  {
    img: kate,
    name: "Kate White",
    note: "EMT-Paramedic"
  },
  {
    img: ann,
    name: "Ann Davis",
    note: "EMT-Basic"
  },
  {
    img: mary,
    name: "Mary-Kate Washington",
    note: "EMT-Basic"
  },
  {
    img: ted,
    name: "Ted Mosby",
    note: "EMT-Paramedic"
  },
  {
    img: kate,
    name: "Kate White",
    note: "EMT-Paramedic"
  },
  {
    img: ann,
    name: "Ann Davis",
    note: "EMT-Basic"
  }


];

export default class GiveFeedback extends Component {

  constructor(props) {
    super(props);
    this.state = {

      searchTerm: ''

    }
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }


  render() {
    const filteredEmails = datas1.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header>
            <Left style={{ flex: 1 }}>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon type='Entypo' name='chevron-thin-left' style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </Button>
            </Left>
            <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Title style={{
                fontFamily: 'Arial Rounded MT Bold', fontSize: 20, fontWeight: "bold",
                fontStyle: "normal",
              }}>Feedback</Title>
            </Body>
            <Right style={{ flex: 1 }}>
            </Right>
          </Header>



          {/* <Header style={{ marginTop: 15, backgroundColor: 'white' }} noShadow={true} searchBar rounded>
            <View style={{ borderColor: '#D1D3D4', borderWidth: 1, borderRadius: 5, width: "95%", padding: 5 }}>
              <Item style={{ width: "100%" }}>
                <Icon name="ios-search" style={{ color: '#D1D3D4' }} />
                <SearchInput placeholder="Search for the colleague you want to rate" placeholderTextColor="#D1D3D4"
                  style={{ fontFamily: 'avenir light', fontSize: 13 }}
                  onChangeText={(term) => { this.searchUpdated(term) }}
                />
              </Item>
            </View>
          </Header> */}




  <View style={{ marginTop: 15, height: 50, width: "100%", alignItems: 'center'}} noShadow={true}>
            <View style={{ borderColor: '#D1D3D4', borderWidth: 1, borderRadius: 5, height:'100%',width: "90%", padding: 5}}>
              <Item style={{ width: "100%" ,height:'100%', borderColor: 'white'}}>
                <Icon name="ios-search" style={{ color: '#D1D3D4' }} />
                <SearchInput placeholder="Search for the colleague you want to rate" placeholderTextColor="#D1D3D4"
                  style={{ fontFamily: 'avenir light', fontSize: 13 , borderColor: 'white'}}
                  onChangeText={(term) => { this.searchUpdated(term) }}
                />
              </Item>
            </View>
            </View>

          <Content>
            <List >
              {filteredEmails.map((data, i) => (
                <ListItem avatar noBorder>
                  <TouchableOpacity >
                    <Left>
                      <Thumbnail source={data.img} />
                    </Left>
                  </TouchableOpacity>

                  <Body>
                    <TouchableOpacity >
                      <Text style={styles.textname}>{data.name}</Text>
                      <Text style={styles.textnote} numberOfLines={1} note>
                        {data.note}
                      </Text>
                    </TouchableOpacity>
                  </Body>
                </ListItem>
              ))}
            </List>
          </Content>

        </Container>
      </StyleProvider>
    )
  }


}

const styles = StyleSheet.create({
  textname: {
    fontFamily: 'avenir light',
    color: '#000000',
    fontSize: 16,
    fontWeight: "500"
  },
  textnote: {
    fontFamily: 'avenir light',
    color: '#000000',
    fontSize: 13,
    fontWeight: "normal"
  },
  texttime: {
    fontFamily: 'avenir light',
    color: '#a7a9ac',
    fontSize: 14,
    fontWeight: "400"
  },
});