
import React, { Component } from 'react';
import { Container, Header,Title, Text, Content, Tab, Tabs,StyleProvider, TabHeading, List, ListItem, Thumbnail, Left, Right,Body } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, View, TouchableOpacity, FlatList,Dimensions, TouchableHighlight } from 'react-native';
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
     name: "Ann Davis",
     note: "EMT-Basic",
     rank: 45
   },
   {
     img: john,
     name: "John Harris",
     note: "Critical Care Paramedic",
     rank: 42
   },
   {
     img: kate,
     name: "Kate White",
     note: "EMT-Paramedic",
     rank: 40
   },
   {
     img: mary,
     name: "Mary-Kate Washington",
     note: "EMT-Basic",
     rank: 38
   },
   {
     img: ted,
     name: "Ted Mosby",
     note: "EMT-Paramedic",
     rank: 35
   },
   {
     img: kate,
     name: "Kate White",
     note: "EMT-Paramedic",
     rank: 33
   },
   {
     img: ann,
     name: "Ann Davis",
     note: "EMT-Basic",
     rank: 30
   },
   {
     img: mary,
     name: "Mary-Kate Washington",
     note: "EMT-Basic",
     rank: 27
   },
   {
     img: ted,
     name: "Ted Mosby",
     note: "EMT-Paramedic",
     rank: 25
   },
   {
     img: kate,
     name: "Kate White",
     note: "EMT-Paramedic",
     rank: 24
   },
   {
     img: ann,
     name: "Ann Davis",
     note: "EMT-Basic",
     rank: 22
   }
   
   
 ];
 
 const rowWidth = (Dimensions.get('screen').width );

 export default class LeaderBoards extends Component {

  render() {
  return (

      <StyleProvider style={getTheme(material)}>
        <Container>
         
        
          <View style={{height: '85%' }}>
         
        {/* <Tabs tabContainerStyle={{ height: 80, width: 380  }}> */}
        <Tabs tabContainerStyle={{ height: 80, width: rowWidth }}>
       
          <Tab  heading="Gave most feedbacks">  
            <GaveFeedbacks navigate={this.props.navigation.navigate}/>
          </Tab>

          <Tab  heading="Got most feedbacks">
            <GotFeedbacks navigate={this.props.navigation.navigate}/>
          </Tab>

          <Tab  heading="Gave most Kudos" >  
            <GaveKudos navigate={this.props.navigation.navigate}/>
          </Tab>

          <Tab  heading="Got most Kudos" >  
            <GotKudos navigate={this.props.navigation.navigate}/>
          </Tab>

        </Tabs>
       
        </View>
       
        <View style={{height: '15%'}}>
        {/* <Content> */}
      
       <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button]}  >
                                <Text style={styles.loginText}>Your postion in the ranking 10</Text>
                            </TouchableOpacity>
                        </View>
                        
           {/* </Content> */}
           </View>
 </Container>
      </StyleProvider>
    );
  }
}

      
      class GaveFeedbacks extends Component {

        render() {
         
          return (
            <Container >
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
                
                <Right>
                  <Text style={styles.texttime} note>{data.rank}</Text>
                </Right>
              </ListItem>
            ))}
         </List>
              </Content>
      </Container>
    );
  }

}

class GotFeedbacks extends Component {

  render() {
   
    return (
      <Container >
        <Content>
          <Text>Got most feedbacks</Text>
        </Content>
</Container>
);
}

}

class GaveKudos extends Component {

  render() {
   
    return (
      <Container >
        <Content>
          <Text>Gave most kudos</Text>
        </Content>
</Container>
);
}

}

class GotKudos extends Component {

  render() {
   
    return (
      <Container >
        <Content>
          <Text>Got most kudos</Text>
        </Content>
</Container>
);
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
    color: '#000000',
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
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
},

loginText: {
  fontFamily:'avenir light',
  fontSize: 17, 
  color: '#f7941d',
},
});