
import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, ImageBackground, View, TouchableOpacity, FlatList, TouchableHighlight, Dimensions } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from "react-native-easy-grid";
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');


const MyAchievements =
    {
        HoursWorked: 20000,
        MostCalls: 20,
        TotalMiles: 15,
        Shifts: 45,
        TotalMVC: 23,
        Morphine: 55


    }
const rowHeight = (Dimensions.get('screen').height - 150) / 3;

export default class Achievements extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (

            <StyleProvider style={getTheme(material)}>
                <Container>
                <Header>
            <Left style={{ flex: 0,width:'10%'}}>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/Path1.png')} />
              </Button>
            </Left>
            <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center',width:'80%' ,}}>
              <Title style={{
                fontFamily: 'ARLRDBD', fontSize: 20, fontWeight: "bold",
                fontStyle: "normal",
              }}>My Achievements</Title>
            </Body>
            <Right  style={{ flex:0,width:'10%'}}>
                </Right>
          
          </Header>
                    <Content padder>
                        <Grid>
                            <Col>
                                <View style={{ height: rowHeight }}>
                                    <Col style={styles.colStyle}>
                                        <Thumbnail large source={require('../../../assets/images/Achieve2.png')} />
                                        <Text style={styles.textValue}>{MyAchievements.HoursWorked}</Text>
                                        <Text style={styles.text}>Hours Worked</Text>
                                    </Col>
                                </View>
                                <View style={{ height: rowHeight }}>
                                    <Col style={styles.colStyle}>
                                        <Thumbnail large source={require('../../../assets/images/Achieve3.png')} />
                                        <Text style={styles.textValue}>{MyAchievements.TotalMiles}</Text>
                                        <Text style={styles.text}>Total Miles</Text>
                                    </Col>
                                </View>
                                <View style={{ height: rowHeight }}>
                                    <Col style={styles.colStyle}>
                                        <Thumbnail large source={require('../../../assets/images/Achieve6.png')} />
                                        <Text style={styles.textValue}>{MyAchievements.TotalMVC}</Text>
                                        <Text style={styles.text}>Total MVC's</Text>
                                    </Col>
                                </View>

                            </Col>
                            <Col>

                                <View style={{ height: rowHeight }}>
                                    <Col style={styles.colStyle}>
                                        <Thumbnail large source={require('../../../assets/images/Achieve1.png')} />
                                        <Text style={styles.textValue}>{MyAchievements.MostCalls}</Text>
                                        <Text style={styles.text}>Most Calls</Text>
                                    </Col>
                                </View>
                                <View style={{ height: rowHeight }}>
                                    <Col style={styles.colStyle}>
                                        <Thumbnail large source={require('../../../assets/images/Achieve4.png')} />
                                        <Text style={styles.textValue}>{MyAchievements.Shifts}</Text>
                                        <Text style={styles.text}>Shifts</Text>
                                    </Col>
                                </View>
                                <View style={{ height: rowHeight, width: '100%' }}>
                                    <Col style={styles.colStyle}>
                                        <Thumbnail large source={require('../../../assets/images/Achieve5.png')} />
                                        <Text style={styles.textValue}>{MyAchievements.Morphine}</Text>
                                        <Text style={styles.text}>Morphines, Total administrated(mg)</Text>
                                    </Col>
                                </View>

                            </Col>
                        </Grid>
                    </Content>
                </Container>
            </StyleProvider>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontFamily: 'avenir light',
        fontSize: 12
    },
    textValue: {
        textAlign: 'center',
        fontFamily: 'avenir light',
        fontSize: 20,
        fontWeight: "500",
    },
    colStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})