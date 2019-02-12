
import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Label, List, ListItem, Button,Icon, Left, Right, Body,CheckBox, StyleProvider, Form, Card, Picker, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import SearchBar from 'react-native-search-bar'

const ann = require("../../../assets/images/userpic1.png");
const john = require("../../../assets/images/userpic2.png");
const kate = require("../../../assets/images/userpic3.png");
const ted = require("../../../assets/images/bitmap.png");
const mary = require("../../../assets/images/bitmap1.png");

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

 

    render() {
   
        return (
          <StyleProvider style={getTheme(material)}>
            <Container>
              <Header>
                <Left style={{ flex: 1 }}>
                  <Button transparent onPress={() => this.props.navigation.goBack()}>
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
                        </Right>
              </Header>
                
                  

<Header style={{marginTop:15, backgroundColor: 'white'}} searchBar rounded>
<View style={{borderColor: '#D1D3D4',borderWidth:1,borderRadius:5, width: "100%", padding: 5}}>
          <Item style={{width: "100%"}}>
            <Icon name="ios-search" style={{color: '#D1D3D4'}}/>
            <TextInput placeholder="Search for the colleague you want to rate"  placeholderTextColor="#D1D3D4"
            style={{fontFamily:'avenir light',fontSize: 13}} />
          </Item>
    </View>     
        </Header>
      
        <Content>
        <List >
       {datas1.map((data, i) => (
              <ListItem avatar noBorder>
              <TouchableOpacity onPress={() => this.props.navigate('Feedback')}>
                <Left>
                  <Thumbnail  source={data.img} />
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
                
                {/* <Right>
                <CheckBox
                  checked={this.state.isSelected}
                  color= '#F7941D'
                  style={{  borderRadius: 13 }}
                  onChange={this.handleChangeCheck(
                    "isSelected"
                  )}
                  value="isSelected"
                        />
                </Right> */}
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
      fontFamily:'avenir light',
      color: '#000000',
      fontSize: 16, 
      fontWeight: "500" 
    },
    textnote: {
      fontFamily:'avenir light',
      color: '#000000',
      fontSize: 13, 
      fontWeight: "normal"
    },
    texttime: {
      fontFamily:'avenir light',
      color: '#a7a9ac',
      fontSize: 14, 
       fontWeight: "400" 
    },
});