
import React, { Component } from 'react';
import { Container, Header, Text, Content, Tab, Tabs, StyleProvider, TabHeading, List, ListItem, Thumbnail, Left, Right, Body } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from 'react-native-easy-grid';
import StarRating from 'react-native-star-rating';
import Icon1 from 'react-native-vector-icons/FontAwesome';

const ann = require("../../../assets/images/bitmap.png");
const john = require("../../../assets/images/bitmap.png");
const kate = require("../../../assets/images/bitmap.png");


const RatingsData = 
    {
       Professionalism:4,
       PatientCare: 3,
       TeamWork :5,
       Attitude: 5,
       Leadership :3
    }
    var count = Object.keys(RatingsData).length;
   const avg=(RatingsData.Professionalism+RatingsData.PatientCare+RatingsData.TeamWork+RatingsData.Leadership+RatingsData.Attitude)/count



export default class Rating_Comments extends Component {


    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>

                    <Tabs  >
                        <Tab heading="My Rating" >
                            <Ratings />
                        </Tab>

                        <Tab heading="Comments">
                            {/* <Comments navigate={this.props.navigation.navigate}/>  */}
                            <Comments />
                        </Tab>

                    </Tabs>

                </Container>
            </StyleProvider>
        );
    }
}


class Ratings extends Component {


    render() {

        return (
            <Container>
                <Content padder>
                    <View>
                        <Text style={{ marginTop:20,width: '80%', marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 12, textAlign: 'center', flex: 1, color: '#030303' }}>Here you can see the evaluation of your work
                        by your colleagues
                            </Text>
                        <Text style={{
                            width: '80%', marginTop:20,marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 20,
                            fontWeight: "500", textAlign: 'center', flex: 1,
                        }}>
                            Overall average rating ({avg})
                            </Text>
                    </View>
                    <Grid style={{marginTop:20}}>
               
                  <Row >
                    <Left>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "normal" }}>Professionalism ({RatingsData.Professionalism})</Text>
                    </Left>
                    <Right>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                     
                        <StarRating
                       disabled={true}
                      // maxStars={4}
                       starSize={26}
                       fullStarColor={'#FFCB05'}
                       emptyStarColor={'#FFCB05'}
                       rating={RatingsData.Professionalism}
                      // selectedStar={(rating) => this.setState(rating)}
                        />
                         
                      </View>
                    </Right>
                  </Row>
                  <Row style={{marginTop:10}}>
                    <Left>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "normal" }}>Patient Care ({RatingsData.PatientCare})</Text>
                    </Left>
                    <Right>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                     
                      <StarRating
                       disabled={true}
                     
                       starSize={26}
                       fullStarColor={'#FFCB05'}
                       emptyStarColor={'#FFCB05'}
                       rating={RatingsData.PatientCare}
                       //selectedStar={(rating) => this.onStarRatingPress2(rating)}
                        />
                      </View>
                    </Right>
                  </Row>
                  <Row style={{marginTop:10}}>
                    <Left>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "normal" }}>Team Work ({RatingsData.TeamWork})</Text>
                    </Left>
                    <Right>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                    
                      <StarRating
                       disabled={true}
                     
                       starSize={26}
                       fullStarColor={'#FFCB05'}
                       emptyStarColor={'#FFCB05'}
                       rating={RatingsData.TeamWork}
                        />
                      </View>
                    </Right>
                  </Row>
                  <Row style={{marginTop:10}}>
                    <Left>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "normal" }}>Attitude ({RatingsData.Attitude})</Text>
                    </Left>
                    <Right>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                     
                      <StarRating
                       disabled={true}
                    
                       starSize={26}
                       fullStarColor={'#FFCB05'}
                       emptyStarColor={'#FFCB05'}
                       rating={RatingsData.Attitude}
                        />
                      </View>
                    </Right>
                  </Row>
                  <Row style={{marginTop:10,marginBottom:10}}>
                    <Left>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "normal" }}>Leadership ({RatingsData.Leadership})</Text>
                    </Left>
                    <Right>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                   
                      <StarRating
                       disabled={true}
                    
                       starSize={26}
                       fullStarColor={'#FFCB05'}
                       emptyStarColor={'#FFCB05'}
                       rating={RatingsData.Leadership}
                        />
                      </View>
                    </Right>
                  </Row>

                </Grid>
                <Text style={{ marginTop:20,width: '80%', marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 12, textAlign: 'center', flex: 1, color: '#A7A9AC' }}>Based on 120 reviews
                            </Text>


                </Content>
            </Container>
        );
    }

}

class Comments extends Component {

    render() {
        return (
            <Container>
                <Text>Hello2</Text>
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
        color: '#a7a9ac',
        fontSize: 14,
        fontWeight: "200"
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
        fontFamily: 'avenir light',
        fontSize: 16,
        color: 'white',
    },
});