
import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem, Icon } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, ImageBackground, View, TouchableOpacity, FlatList, TouchableHighlight, Dimensions } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from "react-native-easy-grid";
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
import Icon1 from 'react-native-vector-icons/Entypo';

const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');


const NotificationData = [
    {
        img: require("../../../assets/images/userpic1.png"),
        Name: 'Ted Mosby',
        Type: 'liked',
        Time: '21 min ago',
        Content: ''
    },
    {
        img: require("../../../assets/images/bitmap1.png"),
        Name: 'Kate Black',
        Type: 'liked',
        Time: '31 min ago',
        Content: ''
    },
    {
        img: require("../../../assets/images/userpic3.png"),
        Name: 'Mary Smith',
        Type: 'commented',
        Time: '40 min ago',
        Content: 'Cool!'
    }
    , {
        img: require("../../../assets/images/bitmap1.png"),
        Name: 'Kate Black',
        Type: 'liked',
        Time: '45 min ago',
        Content: ''
    },
    {
        img: require("../../../assets/images/bitmap.png"),
        Name: 'Mary Smith',
        Type: 'commented',
        Time: '55 min ago',
        Content: 'Cool!'
    },
    {
        img: require("../../../assets/images/userpic1.png"),
        Name: 'Kate Black',
        Type: 'liked',
        Time: '1 hr ago',
        Content: ''
    },
    {
        img: require("../../../assets/images/bitmap1.png"),
        Name: 'Mary Smith',
        Type: 'liked',
        Time: '2 hr ago',
        Content: ''
    },
    {
        img: require("../../../assets/images/bitmap.png"),
        Name: 'Mary Smith',
        Type: 'commented',
        Time: '55 min ago',
        Content: 'Cool!'
    },
    {
        img: require("../../../assets/images/userpic1.png"),
        Name: 'Kate Black',
        Type: 'liked',
        Time: '1 hr ago',
        Content: ''
    },]
const rowHeight = (Dimensions.get('screen').height - 150) / 3;

export default class Notifications extends Component {

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
                            }}>Notifications</Title>
                        </Body>
                        <Right style={{ flex: 0, width: '10%' }}>
                        </Right>

                    </Header>
                    <Content padder>
                        <List >
                            {NotificationData.map((data, i) => (
                                <ListItem avatar noBorder>
                                    <Left>
                                        <Thumbnail source={data.img} />
                                    </Left>
                                    <Body>
                                        <Text style={{ fontFamily: 'avenir light', fontSize: 15 }}><Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "500" }}>{data.Name} </Text>{data.Type} your post {data.Content}</Text>
                                        <Text numberOfLines={1} note>
                                            {data.Time}
                                        </Text>
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