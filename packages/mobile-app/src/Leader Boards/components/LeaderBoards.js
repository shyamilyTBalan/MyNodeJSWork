
import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Tab, Tabs, StyleProvider, TabHeading, List, ListItem, Thumbnail, Left, Right, Body } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, View, TouchableOpacity, FlatList,ImageBackground, Dimensions, TouchableHighlight } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');
const ann = require("../../../assets/images/userpic1.png");
const john = require("../../../assets/images/userpic2.png");
const kate = require("../../../assets/images/userpic3.png");
const ted = require("../../../assets/images/bitmap.png");
const mary = require("../../../assets/images/bitmap1.png");

const datas1 = [
  {
    img: ann,
    rank: 1,
    name: "Ann Davis",
    note: "EMT-Basic",
    number: 45
  },
  {
    img: john,
    rank: 2,
    name: "John Harris",
    note: "Critical Care Paramedic",
    number: 42
  },
  {
    img: kate,
    rank: 3,
    name: "Kate White",
    note: "EMT-Paramedic",
    number: 40
  },
  {
    img: mary,
    rank: 4,
    name: "Mary-Kate Washington",
    note: "EMT-Basic",
    number: 38
  },
  {
    img: ted,
    rank: 5,
    name: "Ted Mosby",
    note: "EMT-Paramedic",
    number: 35
  },
  {
    img: kate,
    rank: 6,
    name: "Kate White",
    note: "EMT-Paramedic",
    number: 33
  },
  {
    img: ann,
    rank: 7,
    name: "Ann Davis",
    note: "EMT-Basic",
    number: 30
  },
  {
    img: mary,
    rank: 8,
    name: "Mary-Kate Washington",
    note: "EMT-Basic",
    number: 27
  },
  {
    img: ted,
    rank: 9,
    name: "Ted Mosby",
    note: "EMT-Paramedic",
    number: 25
  },
  {
    img: kate,
    rank: 10,
    name: "Kate White",
    note: "EMT-Paramedic",
    number: 24
  },
  {
    img: ann,
    rank: 11,
    name: "Ann Davis",
    note: "EMT-Basic",
    number: 22
  }


];


const datas2 = [
  {
    img: kate,
    rank: 1,
    name: "Kate White",
    note: "EMT-Paramedic",
    number: 50
  },
  {
    img: mary,
    rank: 2,
    name: "Mary-Kate Washington",
    note: "EMT-Basic",
    number: 47
  },
  {
    img: ann,
    rank: 3,
    name: "Ann Davis",
    note: "EMT-Basic",
    number: 45
  },
  {
    img: john,
    rank: 4,
    name: "John Harris",
    note: "Critical Care Paramedic",
    number: 42
  },

  {
    img: ted,
    rank: 5,
    name: "Ted Mosby",
    note: "EMT-Paramedic",
    number: 35
  },
  {
    img: mary,
    rank: 6,
    name: "Mary-Kate Washington",
    note: "EMT-Basic",
    number: 38
  },
  {
    img: kate,
    rank: 7,
    name: "Kate White",
    note: "EMT-Paramedic",
    number: 33
  },
  {
    img: ann,
    rank: 8,
    name: "Ann Davis",
    note: "EMT-Basic",
    number: 30
  },
  {
    img: kate,
    rank: 9,
    name: "Kate White",
    note: "EMT-Paramedic",
    number: 27
  },
  {
    img: ted,
    rank: 10,
    name: "Ted Mosby",
    note: "EMT-Paramedic",
    number: 25
  },

  {
    img: ann,
    rank: 11,
    name: "Ann Davis",
    note: "EMT-Basic",
    number: 22
  }


];


const rowWidth = (Dimensions.get('screen').width);

export default class LeaderBoards extends Component {

  

  render() {
    return (

      <StyleProvider style={getTheme(material)}>
        <Container>
          <Tabs tabContainerStyle={{ height: 80, width: rowWidth }}>
            <Tab heading="Gave most feedbacks">
              <GaveFeedbacks navigate={this.props.navigation.navigate} />
            </Tab>
            <Tab heading="Got most feedbacks">
              <GotFeedbacks navigate={this.props.navigation.navigate} />
            </Tab>
            <Tab heading="Gave most Kudos" >
              <GaveKudos navigate={this.props.navigation.navigate} />
            </Tab>
            <Tab heading="Got most Kudos" >
              <GotKudos navigate={this.props.navigation.navigate} />
            </Tab>
          </Tabs>
        </Container>
      </StyleProvider>
    );
  }
}


class GaveFeedbacks extends Component {

  RankValues = (rank,val) => {
    if (rank <= 5 ) {
      return (
     
        <ImageBackground source={require('../../../assets/images/ranks.png')} style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}> 
        <Text style={styles.texttime1}>{val}</Text>
   </ImageBackground>
 
    
        )
   
    }
    else   {
      return (  
    
        <Text style={styles.texttime} >{val}</Text>
       
        )
    }
  }
  

  render() {

    return (
      <Container >
        <View style={{ height: '85%' }}>

          <Content>
            <List >
              {datas1.map((data, i) => (
                <ListItem avatar noBorder>
                  <TouchableOpacity >
                    <Left>
                      <Text>{data.rank+ ". "}</Text>
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

                  <Right >
                  
                    { this.RankValues(data.rank, data.number)}

                  </Right>
                </ListItem>
              ))}
            </List>
          </Content>
          
        </View>
        <View style={{ height: '15%' }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button]}  >
              <Text style={styles.loginText}>Your postion in the numbering 10</Text>
            </TouchableOpacity>
          </View>


        </View>
      </Container>
    );
  }

}

class GotFeedbacks extends Component {

  RankValues = (rank,val) => {
    if (rank <= 5 ) {
      return (
     
        <ImageBackground source={require('../../../assets/images/ranks.png')} style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}> 
        <Text style={styles.texttime1}>{val}</Text>
   </ImageBackground>
 
    
        )
   
    }
    else   {
      return (  
    
        <Text style={styles.texttime} >{val}</Text>
       
        )
    }
  }

  render() {

    return (
      <Container >
        <View style={{ height: '85%' }}>
          <Content>
            <List >
              {datas2.map((data, i) => (
                <ListItem avatar noBorder>
                  <TouchableOpacity >
                    <Left>
                    <Text>{data.rank+ ". "}</Text>
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

                  <Right>
                  { this.RankValues(data.rank, data.number)}
                  </Right>
                </ListItem>
              ))}
            </List>
          </Content>
        </View>
        <View style={{ height: '15%' }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button]}  >
              <Text style={styles.loginText}>Your postion in the numbering 9</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }

}

class GaveKudos extends Component {

  RankValues = (rank,val) => {
    if (rank <= 5 ) {
      return (
     
        <ImageBackground source={require('../../../assets/images/ranks.png')} style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}> 
        <Text style={styles.texttime1}>{val}</Text>
   </ImageBackground>
 
    
        )
   
    }
    else   {
      return (  
    
        <Text style={styles.texttime} >{val}</Text>
       
        )
    }
  }

  render() {

    return (
      <Container >
        <View style={{ height: '85%' }}>
          <Content>
            <List >
              {datas1.map((data, i) => (
                <ListItem avatar noBorder>
                  <TouchableOpacity >
                    <Left>
                    <Text>{data.rank+ ". "}</Text>
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

                  <Right>
                  { this.RankValues(data.rank, data.number)}
                  </Right>
                </ListItem>
              ))}
            </List>
          </Content>
        </View>
        <View style={{ height: '15%' }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button]}  >
              <Text style={styles.loginText}>Your postion in the numbering 7</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }

}

class GotKudos extends Component {

  RankValues = (rank,val) => {
    if (rank <= 5 ) {
      return (
     
        <ImageBackground source={require('../../../assets/images/ranks.png')} style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}> 
        <Text style={styles.texttime1}>{val}</Text>
   </ImageBackground>
 
    
        )
   
    }
    else   {
      return (  
    
        <Text style={styles.texttime} >{val}</Text>
       
        )
    }
  }

  render() {

    return (
      <Container >
          <View style={{ height: '85%' }}>
          <Content>
            <List >
              {datas2.map((data, i) => (
                <ListItem avatar noBorder>
                  <TouchableOpacity >
                    <Left>
                    <Text>{data.rank+ ". "}</Text>
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

                  <Right>
                  { this.RankValues(data.rank, data.number)}
                  </Right>
                </ListItem>
              ))}
            </List>
          </Content>
        </View>
        <View style={{ height: '15%' }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button]}  >
              <Text style={styles.loginText}>Your postion in the numbering 11</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
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
    color: '#000000',
    marginRight: 10,
    fontSize: 15,
    fontWeight: "normal"
  },
  texttime1: {
    fontFamily: 'avenir light',
    color: '#ffffff',
    fontSize: 15,
    fontWeight: "normal"
  },
  buttonContainer: {
    width: '100%',
    height: '100%',
    //  marginTop: 5,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    // marginBottom: 5,
    flexDirection: 'column',
    alignItems: 'center',

  },
  button: {
    height: 50,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "80%",
    borderRadius: 30,
    backgroundColor: "#ffffff",
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },

  loginText: {
    fontFamily: 'avenir light',
    fontSize: 17,
    color: '#f7941d',
  },
});