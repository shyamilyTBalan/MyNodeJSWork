

import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Segment, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, ActivityIndicator, Dimensions, TextInput, ProgressBarAndroid, Image, ImageBackground, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from "react-native-easy-grid";
import { BarChart, XAxis } from 'react-native-svg-charts'
import Svg, { Circle } from 'react-native-svg'
import * as scale from 'd3-scale'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');



export default class ChuteTime extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     selected: 2
        //   };
    }
    state = { selected: 1 }
    render() {
        const data1 = [195, 150, 180, 155, 140, 180, 192]
            .map((value) => ({ value }))
        const data2 = [180, 190, 193, 195, 190, 140, 150]
            .map((value) => ({ value }))
        const data3 = [190, 125, 160, 125, 120, 150, 128]
            .map((value) => ({ value }))

        const data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']



        const barData = [
            {
                data: data1,
                svg: {
                    fill: '#F7941D', 
                   borderRadius:100
                },
            },
            {
                data: data2,
                svg: {
                    fill: '#FAB007',
                },
            },
            {
                data: data3,
                svg: {
                    fill: '#E67702',
                },
            },
        ]

        const barWidth = Dimensions.get('screen').width - 30;

        const progressAverageStyles = {
            backgroundColor: '#F7941D',
            borderRadius: 14,
            borderColor: '#F3F3F3',
        };
        const progressTargetStyles = {
            backgroundColor: '#FAB007',
            borderRadius: 14,
            borderColor: '#F3F3F3',
        };
        const progressTeamAverageStyles = {
            backgroundColor: '#E67702',
            borderRadius: 14,
            borderColor: '#F3F3F3',
        };
        return (

            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Header hasSegment style={{ backgroundColor: 'white' }}>

                        <Body>
                            <Segment style={{ width: 204, borderRadius: 14 }}>
                                <Button first active={this.state.selected === 1} style={styles.segmentButton} onPress={() => this.setState({ selected: 1 })}>
                                    <Text uppercase={false} style={{ fontFamily: "avenir light", fontSize: 14, }}>Week</Text>
                                </Button>
                                <Button active={this.state.selected === 2} style={styles.segmentButton} onPress={() => this.setState({ selected: 2 })}>
                                    <Text uppercase={false} style={{ fontFamily: "avenir light", fontSize: 14, }}>Month</Text>
                                </Button>
                                <Button last active={this.state.selected === 3} style={styles.segmentButton} onPress={() => this.setState({ selected: 3 })}>
                                    <Text uppercase={false} style={{ fontFamily: "avenir light", fontSize: 14, }}>Year</Text>
                                </Button>
                            </Segment>
                        </Body>

                    </Header>

                    <Content padder>
                        {this.state.selected === 1 && <View>
                            <View style={{ justifyContent: 'center', flex: 1, flexDirection: 'column', marginLeft: 5, marginRight: 5 }}>
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Your Average Time
                  </Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <ProgressBarAnimated
                                        {...progressAverageStyles}
                                        width={barWidth}
                                        height={28}
                                        value={70}
                                    />
                                </View>
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Target Time         </Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <ProgressBarAnimated
                                        {...progressTargetStyles}
                                        width={barWidth}
                                        height={28}
                                        value={80}
                                    />
                                </View>
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Team Average Time
                            </Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <ProgressBarAnimated
                                        {...progressTeamAverageStyles}
                                        width={barWidth}
                                        height={28}
                                        value={90}
                                    />
                                </View>


                            </View>
                            <Text style={{ fontFamily: "avenir light", fontSize: 12, textAlign: 'center', color: '#A7A9AC' }}>Last updated 2 days ago
                            </Text>
                            <View style={styles.separator} />
                            <View style={{ marginTop: 15, marginBottom: 15, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/happy3.png')} />
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/smile3.png')} />
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/meh2.png')} />
                            </View>
                            <Text style={{ width: '50%', marginBottom: 15, marginLeft: '25%', marginRight: '25%', fontFamily: "avenir light", fontSize: 20, textAlign: 'center', }}>Very Good!
                            </Text>
                            <Text style={{ width: '80%', marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 12, textAlign: 'center', flex: 1, color: '#A7A9AC' }}>Your performance exceeds the average required!
Keep up the good work!
                            </Text>
                            <View style={[styles.separator, { marginTop: 15 }]} />
                            <View style={{ flex: 1 }}>
                                <BarChart
                                    flex={1}                               
                                    borderRadius={.5}
                                    spacingInner={.4}
                                    spacingOuter={.15}
                                    style={{ height: 200,  borderRadius: 125 }}
                                    data={barData}
                                    spacing={.6}
                                    contentInset={{ top: 10, bottom: 10 }}
                                    yAccessor={({ item }) => item.value}

                                    scale={scale.scaleBand}
                                    { ...this.props }
                                >

                                </BarChart>

                            </View>
                            <View style={{ marginTop: 10, width: '100%', height: 100 }}>
                                <XAxis
                                    spacingInner={.9}
                                    spacingOuter={.9}                                  
                                    contentInset={{ left: 20, right: 20 }}                                   
                                    data={data}
                                    svg={{
                                        fill: 'black',
                                        fontFamily: 'avenir light',
                                        fontSize: 14,
                                        paddingLeft: 30, marginRight: 20
                                    }}                                    
                                    formatLabel={(value, index) => data[index]}                                
                                />
                                <Grid>
                                    <Col style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <Svg height="20%" width="20%" viewBox="0 0 100 100">
                                            <Circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                fill="#F7941D"
                                            />
                                        </Svg><Text style={{
                                            fontFamily: 'avenir light',
                                            fontSize: 14,
                                        }}>Your Time</Text>
                                    </Col>
                                    <Col style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <Svg height="20%" width="20%" viewBox="0 0 100 100">
                                            <Circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                fill="#FAB007"
                                            />
                                        </Svg><Text style={{
                                            fontFamily: 'avenir light',
                                            fontSize: 14,
                                        }}>Target Time</Text>
                                    </Col>
                                    <Col style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <Svg height="20%" width="20%" viewBox="0 0 100 100">
                                            <Circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                fill="#E67702"
                                            />
                                        </Svg><Text style={{
                                            fontFamily: 'avenir light',
                                            fontSize: 14,
                                        }}>Team Time</Text>
                                    </Col>
                                </Grid>
                            </View>
                        </View>}
                        {this.state.selected === 2 && <View>
                            <View style={{ justifyContent: 'center', flex: 1, flexDirection: 'column', marginLeft: 5, marginRight: 5 }}>
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Your Average Time
                  </Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <ProgressBarAnimated
                                        {...progressAverageStyles}
                                        width={barWidth}
                                        height={28}
                                        value={30}
                                    />
                                </View>
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Target Time         </Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <ProgressBarAnimated
                                        {...progressTargetStyles}
                                        width={barWidth}
                                        height={28}
                                        value={80}
                                    />
                                </View>
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Team Average Time
                            </Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <ProgressBarAnimated
                                        {...progressTeamAverageStyles}
                                        width={barWidth}
                                        height={28}
                                        value={50}
                                    />
                                </View>


                            </View>
                            <Text style={{ fontFamily: "avenir light", fontSize: 12, textAlign: 'center', color: '#A7A9AC' }}>Last updated 2 days ago
                            </Text>
                            <View style={styles.separator} />
                            <View style={{ marginTop: 15, marginBottom: 15, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/happy3.png')} />
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/meh3.png')} />
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/smile4.png')} />
                            </View>
                            <Text style={{ width: '50%', marginBottom: 15, marginLeft: '25%', marginRight: '25%', fontFamily: "avenir light", fontSize: 20, textAlign: 'center', }}>Attention!
                            </Text>
                            <Text style={{ width: '80%', marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 12, textAlign: 'center', flex: 1, color: '#A7A9AC' }}>We've noticed a decline in your results
                            for a long time. Please take the survey so that
                            we can offer you solutions to this problem
                            </Text>
                            <View  >
                            </View>

                        </View>}
                    </Content>
                </Container>
            </StyleProvider>
        )
    }
}


const styles = StyleSheet.create({
    separator: {
        marginVertical: 3,
        borderWidth: 0.5,
        borderColor: '#DCDCDC',
    },
    segmentButton: {
        paddingLeft: 0,
        paddingRight: 0,

    },
    profileImgContainer: {
        overflow: 'hidden',
        height: 140,
        width: 140,
        borderRadius: 70,
    },
    profileImg: {
        height: 140,
        width: 140,
        borderRadius: 70,
    },
    buttonContainer: {
        width: '100%',
        height: '45%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        height: '45%',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        borderRadius: 30,
    },
});