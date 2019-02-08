
import React, { Component } from 'react';
import { Container, Header, Text, Content, Tab, Tabs,StyleProvider, TabHeading, List, ListItem, Thumbnail, Left, Right,Body } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from 'react-native-easy-grid';

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
    time: "Yesterday"
  },
  {
    img: john,
    name: "John Harris",
    note: "Critical Care Paramedic",
    time: "28 days ago"
  },
  {
    img: kate,
    name: "Kate White",
    note: "EMT-Paramedic",
    time: "12/12/18"
  },
  {
    img: mary,
    name: "Mary-Kate Washington",
    note: "EMT-Basic",
    time: "1h ago"
  },
  {
    img: ted,
    name: "Ted Mosby",
    note: "EMT-Paramedic",
    time: "5h ago"
  },
  {
    img: kate,
    name: "Kate White",
    note: "EMT-Paramedic",
    time: "Yesterday"
  },
  {
    img: ann,
    name: "Ann Davis",
    note: "EMT-Basic",
    time: "Yesterday"
  },
  {
    img: mary,
    name: "Mary-Kate Washington",
    note: "EMT-Basic",
    time: "1h ago"
  },
  {
    img: ted,
    name: "Ted Mosby",
    note: "EMT-Paramedic",
    time: "5h ago"
  },
  {
    img: kate,
    name: "Kate White",
    note: "EMT-Paramedic",
    time: "Yesterday"
  },
  {
    img: ann,
    name: "Ann Davis",
    note: "EMT-Basic",
    time: "Yesterday"
  }
  
  
];

const datas2 = [
  {
    img: mary,
    name: "Mary-Kate Washington",
    note: "EMT-Basic",
    time: "1h ago"
  },
  {
    img: ted,
    name: "Ted Mosby",
    note: "EMT-Paramedic",
    time: "5h ago"
  },
  {
    img: kate,
    name: "Kate White",
    note: "EMT-Paramedic",
    time: "Yesterday"
  },
  {
    img: ann,
    name: "Ann Davis",
    note: "EMT-Basic",
    time: "Yesterday"
  }
  
];



export default class FeedbackMain extends Component {

    render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container >

        <Tabs  >
       
          <Tab heading="Pending" >  
            <Pending navigate={this.props.navigation.navigate}/>
          </Tab>

          <Tab heading="Requested">
            <Requested navigate={this.props.navigation.navigate}/>
          </Tab>

        </Tabs>
       
      </Container>
      </StyleProvider>
    );
  }
}


class Pending extends Component {

  render() {
   
    return (
      <Container >
        
        <Content >
          <View style={{height: '90%' }}>
       
       <List >
       {datas1.map((data, i) => (
              <ListItem avatar noBorder>
              <TouchableOpacity onPress={() => this.props.navigate('Feedback')}>
                <Left>
                  <Thumbnail small source={data.img} />
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
                  <Text style={styles.texttime} note>{data.time}</Text>
                </Right>
              </ListItem>
            ))}
         </List>
       
        </View>
        
       
        <View style={{height: '10%'}}>
       
         <Row >
           <Col style={{ width: '50%' }}>
           <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, styles.loginButton]}>
                                <Text style={styles.loginText}>Request Feedback</Text>
                            </TouchableOpacity>
                        </View>
                        </Col>
                        <Col style={{ width: '50%' }}>
                <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, styles.loginButton]}>
                                <Text style={styles.loginText}>Give Feedback</Text>
                            </TouchableOpacity>
                        </View>
                       </Col>
           </Row>
          
           </View>
           </Content>

      </Container>
    );
  }

}

class Requested extends Component {

  render() {
    return (
      <Container>
        <List>
       {datas2.map((data, i) => (
              <ListItem avatar noBorder>
              {/* <TouchableOpacity onPress={() => this.props.navigate('Feedback')}> */}
                <Left>
                  <Thumbnail small source={data.img} />
                </Left>
                {/* </TouchableOpacity> */}
                <Body>
                  <Text style={styles.textname}>{data.name}</Text>
                  <Text style={styles.textnote} numberOfLines={1} note>
                    {data.note}
                  </Text>
                </Body>
                <Right>
                  <Text style={styles.texttime} note>{data.time}</Text>
                </Right>
              </ListItem>
            ))}
         </List>
         <Row style={{position: 'absolute', bottom: 15}}>
           <Col style={{ width: '50%' }}>
           <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, styles.loginButton]}>
                                <Text style={styles.loginText}>Request Feedback</Text>
                            </TouchableOpacity>
                        </View>
                        </Col>
                        <Col style={{ width: '50%' }}>
                <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, styles.loginButton]}>
                                <Text style={styles.loginText}>Give Feedback</Text>
                            </TouchableOpacity>
                        </View>
                       </Col>
           </Row>

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
    color: '#a7a9ac',
    fontSize: 14, 
     fontWeight: "400" 
  },
  buttonContainer: {
    width: '100%',
    height: '100%',
     marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
   
},
button: {
  height: 50,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: 160,
  borderRadius: 30,
},
loginButton: {
  backgroundColor: "#f7941d",
},
loginText: {
  fontFamily:'avenir light',
  fontSize: 16, 
  color: 'white',
},
});