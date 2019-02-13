
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
    note: "EMT-Basic",
    id: "1"
  },
  {
    img: john,
    name: "John Harris",
    note: "Critical Care Paramedic",
    id: "2"
  },
  {
    img: kate,
    name: "Kate White",
    note: "EMT-Paramedic",
    id: "3"
  },
  {
    img: mary,
    name: "Mary-Kate Washington",
    note: "EMT-Basic",
    id: "4"
  },
  {
    img: ted,
    name: "Ted Mosby",
    note: "EMT-Paramedic",
    id: "5"
  },
  {
    img: kate,
    name: "Kate White",
    note: "EMT-Paramedic",
    id: "6"
  },
  {
    img: ann,
    name: "Ann Davis",
    note: "EMT-Basic",
    id: "7"
  },
  {
    img: mary,
    name: "Mary-Kate Washington",
    note: "EMT-Basic",
    id: "8"
  },
  {
    img: ted,
    name: "Ted Mosby",
    note: "EMT-Paramedic",
    id: "9"
  },
  {
    img: kate,
    name: "Kate White",
    note: "EMT-Paramedic",
    id: "10"
  },
  {
    img: ann,
    name: "Ann Davis",
    note: "EMT-Basic",
    id: "11"
  }


];

export default class RequestFeedback extends Component {

  constructor(props) {
    super(props);
    this.state = {

      searchTerm: '',
      selectedFriendId: [],

    }
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  onCheckBoxPress(id) {
    let tmp = this.state.selectedFriendId;

    if (tmp.includes(id)) {
      tmp.splice(tmp.indexOf(id), 1);
    } else {
      tmp.push(id);
    }

    this.setState({
      selectedFriendId: tmp,

    });
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
                fontFamily: 'ARLRDBD', fontSize: 20, fontWeight: "bold",
                fontStyle: "normal",
              }}>Feedback</Title>
            </Body>
            <Right style={{ flex: 1 }}>
              <Text style={{ color: '#FFFFFF', fontFamily: 'ARLRDBD' }}>Request</Text>
            </Right>
          </Header>



          <Header style={{ marginTop: 15, backgroundColor: 'white' }} noShadow={true} searchBar rounded>
            <View style={{ borderColor: '#D1D3D4', borderWidth: 1, borderRadius: 5, width: "95%", padding: 5 }}>
              <Item style={{ width: "100%" }}>
                <Icon name="ios-search" style={{ color: '#D1D3D4' }} />
                <SearchInput placeholder="Search for the colleague you want to rate" placeholderTextColor="#D1D3D4"
                  style={{ fontFamily: 'avenir light', fontSize: 13 }}
                  onChangeText={(term) => { this.searchUpdated(term) }}
                />
              </Item>

            </View>

          </Header>

          <Content padder>
            <List >
              {filteredEmails.map((data, i) => (

                <ListItem avatar noBorder
                >

                  <TouchableOpacity onPress={() => this.props.navigate('Feedback')}>
                    <Left>
                      <Thumbnail source={data.img} />
                    </Left>
                  </TouchableOpacity>

                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigate('Feedback')}>
                      <Text style={styles.textname}>{data.name}</Text>
                      <Text style={styles.textnote} numberOfLines={1} note>
                        {data.note}
                      </Text>
                    </TouchableOpacity>
                  </Body>

                  <Right>

                    <CheckBox
                      color='#F7941D'
                      style={{ width: 36, height: 36, paddingLeft: 10, paddingBottom: 5, paddingTop: 8, paddingRight: 5, borderRadius: 18 }}
                      checked={this.state.selectedFriendId.includes(data.id) ? true : false}
                      onPress={() => this.onCheckBoxPress(data.id)}
                    />
                  </Right>
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