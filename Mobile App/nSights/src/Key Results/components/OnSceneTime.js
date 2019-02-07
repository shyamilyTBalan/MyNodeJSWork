

import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Segment, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, ActivityIndicator, Dimensions, TextInput, ProgressBarAndroid, Image, ImageBackground, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from "react-native-easy-grid";
import { BarChart, XAxis, AreaChart, LineChart, YAxis, Grid as Grid1 } from 'react-native-svg-charts'
import Svg, { Circle } from 'react-native-svg'
import * as scale from 'd3-scale'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');



export default class OnSceneTime extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     selected: 2
        //   };
    }
    state = { selected: 1 }
    render() {
        const data1 = [80, 60, 74, 95, 85, 91, 70,]
        const data2 = [50, 50, 50, 50, 50, 50, 50]

        const data3 = [70, 80, 70, 50, 80, 80, 71,]
     //   const data5 = [10, 80, 70, 50, 80, 40, 71, 80, 40, 71]

        const data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

        // const data1 = [195, 150, 180, 155, 140, 180, 192]
        //     .map((value) => ({ value }))
        // const data2 = [180, 190, 193, 195, 190, 140, 150]
        //     .map((value) => ({ value }))
        // const data3 = [190, 125, 160, 125, 120, 150, 128]
        //     .map((value) => ({ value }))




        // const barData = [
        //     {
        //         data: data1,
        //         svg: {
        //             fill: '#F7941D',
        //             borderRadius: 100
        //         },
        //     },
        //     {
        //         data: data2,
        //         svg: {
        //             fill: '#FAB007',
        //         },
        //     },
        //     {
        //         data: data3,
        //         svg: {
        //             fill: '#E67702',
        //         },
        //     },
        // ]

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
                            <Segment style={{ width: 300, borderRadius: 14 }}>
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


                            <View style={{ height: 200, paddingVertical: 16, flexDirection: 'row' }}>
                                {/* <YAxis data={ data1 } formatLabel={ value => `${value}` }
                                 contentInset={{top: 5, bottom: 5}} svg={{ fill: 'grey', fontSize: 10, }} 
                                 numberOfTicks={ 10} /> */}
                                <LineChart
                                spacingInner={.9}
                                spacingOuter={.9}
                                    style={StyleSheet.absoluteFill}
                                    data={data1}
                                    svg={{ stroke: '#F7941D', strokeWidth: 5 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                // curve={ shape.curveNatural }
                                >
                                    {/* <Grid1 /> */}
                                </LineChart>

                                <LineChart
                                spacingInner={.9}
                                spacingOuter={.9}
                                    // yAccessor={({ data2 }) => data2.val}
                                    style={StyleSheet.absoluteFill}
                                    data={data2}
                                    svg={{ stroke: '#975A16', strokeWidth: 5 }}
                                    contentInset={{ bottom: 95 }}

                                />
                                <LineChart
                                spacingInner={.9}
                                spacingOuter={.9}
                                    style={StyleSheet.absoluteFill}
                                    data={data3}
                                    svg={{ stroke: '#E67702', strokeWidth: 5 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                //curve={ shape.curveNatural }
                                />
                            </View>
                            <XAxis
                                spacingInner={.9}
                                spacingOuter={.9}
                                contentInset={{ left: 20, right: 10 }}
                                data={data}
                                svg={{
                                    fill: 'black',
                                    fontFamily: 'avenir light',
                                    fontSize: 14,
                                    //paddingLeft: 0, marginRight: 20
                                }}
                                formatLabel={(value, index) => data[index]}
                            />


                            <View style={{ marginTop: 10, width: '100%', height: 100 }}>

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
                                                fill="#975A16"
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
        width: 100,
        justifyContent: 'center',
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