
import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Footer, FooterTab, Label, List, Radio, CheckBox, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem, Icon } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, ImageBackground, View, TouchableOpacity, FlatList, TouchableHighlight, Dimensions } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from "react-native-easy-grid";
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
import Icon1 from 'react-native-vector-icons/Entypo';

const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');
const mockData = [
    {
        value: 'fi',
        label: 'label1',

    },
    {
        value: 'se',
        label: 'label2',

    },
    {
        value: 'th',
        label: 'label3',

    }
];

const ReportData = [
    {
        Content: 'I’m not interested in this post'
    },
    {
        Content: 'It’s suspicious or spam'
    },
    {
        Content: 'It displays a sensitive image'
    }
    , {
        Content: 'It’s abusive or harmful'
    },


]
const rowHeight = (Dimensions.get('screen').height - 150) / 3;

export default class ReportUser extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (

            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Header>
                        <Left style={{ flex: 0, width: '15%' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Text style={{ color: 'white' }}>Back</Text>
                            </TouchableOpacity>
                        </Left>
                        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '70%', }}>
                            <Title style={{
                                fontFamily: 'ARLRDBD', fontSize: 20, fontWeight: "bold",
                                fontStyle: "normal",
                            }}>Report</Title>
                        </Body>
                        <Right style={{ flex: 0, width: '15%' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Text style={{ color: '#FFFFFF', fontFamily: 'ARLRDBD' }}>Done</Text>
                            </TouchableOpacity>
                        </Right>

                    </Header>
                    <Content padder>
                        <Text style={{ marginTop:15,marginBottom:15, fontWeight: "500",textAlign: 'center', fontFamily: "avenir light", fontSize: 20, }}>What is going on with this post?
</Text>
                        <List >
                            {ReportData.map((data, i) => (
                                <View>
                                    <ListItem>

                                        <Body><Text style={styles.text}>{data.Content}</Text>
                                        </Body>
                                        <Right>

                                            <CheckBox
                                                color='#F7941D'
                                                style={{ width: 36, height: 36, paddingLeft: 10, paddingBottom: 5, paddingTop: 8, paddingRight: 5, borderRadius: 18 }}
                                                checked={true}
                                            //     onPress={()=>this.onCheckBoxPress(data.id)}
                                            />
                                        </Right>
                                    </ListItem>

                                </View>
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
      
        fontFamily: 'avenir light',
        fontSize: 16
    },
  
})