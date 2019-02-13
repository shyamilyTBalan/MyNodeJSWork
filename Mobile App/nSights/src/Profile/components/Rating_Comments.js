
import React, { Component } from 'react';
import { Container, Header, Text, Content, Tab, Tabs, StyleProvider, TabHeading, List, Icon, ListItem, Separator, Thumbnail, Left, Right, Button, Title, Body } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from 'react-native-easy-grid';
import StarRating from 'react-native-star-rating';
import Icon1 from 'react-native-vector-icons/FontAwesome';






const CommentsData = [
    {
        Img: require("../../../assets/images/userpic1.png"),
        Name: 'Ted Mosby',
        Time: '12 min ago',
        Comment: [
            { "type": 'Professionalism', "description": "I observed that your assessment of a recent chest pain call was spot on. I mention this because I was impressed with your clinical skills. One suggestion that I have is to keep up the good work." },
            { "type": 'Attitude', "description": "I found that your assessment of a recent chest pain call was spot on. I mention this because I was impressed with your clinical skills. One suggestion that I have is to keep up the good work." }
        ]
        ,
        isPrivate: true

    },
    {
        Img: require("../../../assets/images/bitmap.png"),
        Name: 'Kate Black',
        Time: '2 hr ago',
        Comment: [

            { "type": 'Leadership', "description": "I observed that your assessment of a recent chest pain call was spot on. I mention this because I was impressed with your clinical skills. One suggestion that I have is to keep up the good work." }
        ]
        ,
        isPrivate: false

    },
    {
        Img: require("../../../assets/images/userpic1.png"),
        Name: 'Mary Kate',
        Time: '12/10/2018',
        Comment: [
            { "type": 'Team Work', "description": "I observed that your assessment of a recent chest pain call was spot on. I mention this because I was impressed with your clinical skills. One suggestion that I have is to keep up the good work." },
            { "type": 'Professionalism', "description": "I found that your assessment of a recent chest pain call was spot on. I mention this because I was impressed with your clinical skills. One suggestion that I have is to keep up the good work." }
        ]
        ,
        isPrivate: true

    },
    {
        Img: require("../../../assets/images/bitmap.png"),
        Name: 'Nik Brown',
        Time: '07/08/2018',
        Comment: [
            { "type": 'Leadership', "description": "I observed that your assessment of a recent chest pain call was spot on. I mention this because I was impressed with your clinical skills. One suggestion that I have is to keep up the good work." },
            { "type": 'Attitude', "description": "I found that your assessment of a recent chest pain call was spot on. I mention this because I was impressed with your clinical skills. One suggestion that I have is to keep up the good work." }
        ]
        ,
        isPrivate: false

    },
    {
        Img: require("../../../assets/images/userpic1.png"),
        Name: 'Mary Kate',
        Time: '02/01/2018',
        Comment: [
            { "type": 'Team Work', "description": "I observed that your assessment of a recent chest pain call was spot on. I mention this because I was impressed with your clinical skills. One suggestion that I have is to keep up the good work." },
            { "type": 'Leadership', "description": "I found that your assessment of a recent chest pain call was spot on. I mention this because I was impressed with your clinical skills. One suggestion that I have is to keep up the good work." }
        ]
        ,
        isPrivate: true

    },
    {
        Img: require("../../../assets/images/userpic1.png"),
        Name: 'Jennifer Aniston',
        Time: '01/01/2018',
        Comment: [
            { "type": 'Team Work', "description": "I observed that your assessment of a recent chest pain call was spot on. I mention this because I was impressed with your clinical skills. One suggestion that I have is to keep up the good work." },
            { "type": 'Professionalism', "description": "I found that your assessment of a recent chest pain call was spot on. I mention this because I was impressed with your clinical skills. One suggestion that I have is to keep up the good work." }
        ]
        ,
        isPrivate: true

    },]

const RatingsData =
{
    Professionalism: 4,
    PatientCare: 3,
    TeamWork: 5,
    Attitude: 5,
    Leadership: 3
}
var count = Object.keys(RatingsData).length;
const avg = (RatingsData.Professionalism + RatingsData.PatientCare + RatingsData.TeamWork + RatingsData.Leadership + RatingsData.Attitude) / count



export default class Rating_Comments extends Component {
    render() {
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
                            }}>Profile</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
                        </Right>
                    </Header>
                    <Tabs  >
                        <Tab heading="My Rating" >
                            <Ratings />
                        </Tab>
                        <Tab heading="Comments">
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
                        <Text style={{ marginTop: 20, width: '80%', marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 12, textAlign: 'center', flex: 1, color: '#030303' }}>Here you can see the evaluation of your work
                        by your colleagues
                            </Text>
                        <Text style={{
                            width: '80%', marginTop: 20, marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 20,
                            fontWeight: "500", textAlign: 'center', flex: 1,
                        }}>
                            Overall average rating ({avg})
                            </Text>
                    </View>
                    <Grid style={{ marginTop: 20 }}>
                        <Row >
                            <Left>
                                <Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "normal" }}>Professionalism ({RatingsData.Professionalism})</Text>
                            </Left>
                            <Right>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <StarRating
                                        disabled={true}
                                        starSize={26}
                                        fullStarColor={'#FFCB05'}
                                        emptyStarColor={'#FFCB05'}
                                        rating={RatingsData.Professionalism}
                                    />
                                </View>
                            </Right>
                        </Row>
                        <Row style={{ marginTop: 10 }}>
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
                                    />
                                </View>
                            </Right>
                        </Row>
                        <Row style={{ marginTop: 10 }}>
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
                        <Row style={{ marginTop: 10 }}>
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
                        <Row style={{ marginTop: 10, marginBottom: 10 }}>
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
                    <Text style={{ marginTop: 20, width: '80%', marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 12, textAlign: 'center', flex: 1, color: '#A7A9AC' }}>Based on 120 reviews
                            </Text>
                </Content>
            </Container>
        );
    }

}

class Comments extends Component {
    render() {
        const privateIcon = <Icon1 name='lock' size={22} color='#d1d3d4' />;
        return (
            <Container>
                <Content>
                    <List>
                        {CommentsData.map((data, i) => (
                            <View>
                                <ListItem avatar noBorder >
                                    <Left>
                                        <View >
                                            <Thumbnail small source={data.Img} />
                                        </View>
                                    </Left>
                                    <Body>
                                        <View style={{ width: '100%', flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                                            <Text style={{ fontFamily: 'avenir light', fontWeight: "500" }}>{data.Name} {data.isPrivate ? privateIcon : <Text></Text>}</Text>
                                            <Text style={{ color: '#a7a9ac', fontSize: 14, fontFamily: 'avenir light', }}>{data.Time}</Text>
                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                            {CommentsData[i].Comment.map((item, index) => (
                                                <View><Text style={{ fontSize: 14, color: '#F7941D', fontFamily: 'avenir light', fontWeight: "500" }}>{item.type.toUpperCase()}</Text>
                                                    <Text style={{ fontSize: 14, fontFamily: 'avenir light' }}>{item.description}</Text></View>
                                            ))}
                                        </View>
                                    </Body>
                                </ListItem>
                            </View>
                        ))}
                    </List>
                </Content>
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