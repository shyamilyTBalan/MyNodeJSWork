
import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Footer, FooterTab, Label, List, Radio, CheckBox, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem, Icon } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, ImageBackground, View, TouchableOpacity, FlatList, TouchableHighlight, Dimensions } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

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


export default class ReportUser extends Component {
    constructor() {
        super();
        this.state = {
            pressed: true,
            value: "",
        };
    }

    onCheckBoxPress(ev) {
        if (this.state.value == ev) {
            this.setState({ value: {} });
            return;
        }
        this.setState({ value: ev });
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
                                fontFamily: 'Arial Rounded MT Bold', fontSize: 20, fontWeight: "bold",
                                fontStyle: "normal",
                            }}>Report</Title>
                        </Body>
                        <Right style={{ flex: 0, width: '15%' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Text style={{ color: '#FFFFFF', fontFamily: 'Arial Rounded MT Bold' }}>Done</Text>
                            </TouchableOpacity>
                        </Right>
                    </Header>
                    <Content >
                        <Text style={{ marginTop: 15, marginBottom: 15, fontWeight: "500", textAlign: 'center', fontFamily: "avenir light", fontSize: 20, }}>What is going on with this post?
                        </Text>
                        <List>
                            {ReportData.map((value, index) => {
                                return (
                                    <View>
                                        <ListItem avatar noBorder style={{ marginTop: 5, marginBottom: 5 }} key={index}>
                                            <Body>
                                                <Text style={styles.text}>{value.Content}</Text>
                                            </Body>
                                            <Right>
                                                <CheckBox
                                                    color='#F7941D'
                                                    style={{ width: 36, height: 36, paddingLeft: 10, paddingBottom: 5, paddingTop: 8, paddingRight: 5, borderRadius: 18 }}
                                                    onPress={this.onCheckBoxPress.bind(this, value)}
                                                    checked={this.state.value == value}
                                                />
                                            </Right>

                                        </ListItem>
                                        <View style={[styles.separator]} />
                                    </View>
                                );
                            })}
                        </List>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}
const styles = StyleSheet.create({
    text: {

        fontFamily: 'avenir light',
        fontSize: 16
    },
    separator: {
        marginVertical: 3,
        borderWidth: 0.5,
        borderColor: '#DCDCDC',
    },

})