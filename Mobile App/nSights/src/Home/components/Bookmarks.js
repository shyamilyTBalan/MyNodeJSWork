
import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem, Icon } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, ImageBackground, View, TouchableOpacity, FlatList, TouchableHighlight, Dimensions } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from "react-native-easy-grid";
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
import Icon1 from 'react-native-vector-icons/Entypo';
import PositiveQuotes from '../../../src/Home/components/PositiveQuotes'
const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');


const BookmarkData = [
    {
        Date: '19 December 2018',
        Content: 'Its so easy to be kind - you only need to imagine yourself in the place of another person before you start judging him',
        Author: 'Marlene Dietrich',
        Lifespan: '1901 - 1992'
    },
    {
        Date: '20 January 2019',
        Content: 'Its so easy to be kind - you only need to imagine yourself in the place of another person before you start judging him',
        Author: 'Marlene Dietrich',
        Lifespan: '1901 - 1992'
    },
    {
        Date: '21 January 2019',
        Content: 'Its so easy to be kind - you only need to imagine yourself in the place of another person before you start judging him',
        Author: 'Marlene Dietrich',
        Lifespan: '1901 - 1992'
    }
    , {
        Date: '22 January 2019',
        Content: 'Its so easy to be kind - you only need to imagine yourself in the place of another person before you start judging him',
        Author: 'Marlene Dietrich',
        Lifespan: '1901 - 1992'
    },
    {
        Date: '23 January 2019',
        Content: 'Its so easy to be kind - you only need to imagine yourself in the place of another person before you start judging him',
        Author: 'Marlene Dietrich',
        Lifespan: '1901 - 1992'
    },
    {
        Date: '24 January 2019',
        Content: 'Its so easy to be kind - you only need to imagine yourself in the place of another person before you start judging him',
        Author: 'Marlene Dietrich',
        Lifespan: '1901 - 1992'
    },
    {
        Date: '25 January 2019',
        Content: 'Its so easy to be kind - you only need to imagine yourself in the place of another person before you start judging him',
        Author: 'Marlene Dietrich',
        Lifespan: '1901 - 1992'
    }]
const rowHeight = (Dimensions.get('screen').height - 150) / 3;

export default class Bookmarks extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (

            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Header>
                        <Left style={{ flex: 0, width: '10%' }}>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon type='Entypo' name='chevron-thin-left' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </Button>
                        </Left>
                        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '80%', }}>
                            <Title style={{
                                fontFamily: 'ARLRDBD', fontSize: 20, fontWeight: "bold",
                                fontStyle: "normal",
                            }}>Bookmarks</Title>
                        </Body>
                        <Right style={{ flex: 0, width: '10%' }}>
                        </Right>

                    </Header>
                    <Content padder>
                        {BookmarkData.map((data, i) => (
                            <Card>

                                <View>
                                    <CardItem header >
                                        <Left style={{ flex: 0, width: '10%', }}>
                                        </Left>
                                        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '80%', }}>
                                            <Text>{data.Date}</Text>
                                        </Body>
                                        <Right style={{ flex: 0, width: '10%' }}>
                                            <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/Bookmark1.png')} />
                                        </Right>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            <Text style={{ textAlign: 'center', fontFamily: 'avenir light', fontSize: 15 }}>
                                                {data.Content}
                                            </Text>
                                        </Body>
                                    </CardItem>


                                    <CardItem footer style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: "300", fontFamily: 'avenir light', fontStyle: "italic", fontSize: 13 }}>{data.Author}</Text>
                                        <Text style={{ fontWeight: "300", fontFamily: 'avenir light', fontStyle: "italic", fontSize: 13 }}>({data.Lifespan})</Text>
                                    </CardItem>
                                </View>


                            </Card>
                        ))}
                        <View>
          {/* <PositiveQuotes pagekey={"uniquekey"} title={"categort title"} description={"topic description"}/> */}
      </View>
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