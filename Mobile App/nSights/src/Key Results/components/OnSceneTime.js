

import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Segment, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem,Icon, Button, Left, Right, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, ActivityIndicator, Dimensions, TextInput, ProgressBarAndroid, Image, ImageBackground, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from "react-native-easy-grid";
import { BarChart, XAxis, AreaChart, LineChart, YAxis, Grid as Grid1 } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Svg, { Circle, G, Line, Rect, Path, Text as Text1 } from 'react-native-svg'
import * as scale from 'd3-scale'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');



export default class OnSceneTime extends Component {

    constructor(props) {
        super(props);
      
    }
    state = { selected: 1 }
    render() {
        const data1 = [70, 80, 80, 95, 50, 60, 85]
        const data2 = [50, 50, 50, 50, 50, 50, 50]
        const data3 = [50, 65, 60, 95, 40, 60, 60]

        const data11 = [50, 60, 70, 90, 60, 50, 95, 80, 90, 84, 77, 66, 84, 57, 54, 67, 80, 75, 68, 84, 77, 80, 85, 90, 84, 65, 75, 90, 77, 80]
        const data12 = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
        const data13 = [80, 62, 52, 75, 90, 54, 60, 75, 85, 90, 84, 65, 70, 76, 62, 88, 78, 64, 85, 70, 65, 80, 75, 55, 75, 60, 80, 75, 79, 60]

        const data21 = [50, 60, 75, 90, 80, 50, 95, 75, 60, 80, 55, 65]
        const data22 = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
        const data23 = [80, 72, 52, 65, 90, 54, 70, 65, 80, 95, 60, 73]


        const weekdata = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        const monthdata = ['2/1/19', '2/2/19', '2/3/19', '2/4/19', '2/5/19', '2/6/19', '2/7/19', '2/8/19', '2/9/19', '2/10/19', '2/11/19', '2/12/19', '2/13/19', '2/14/19', '2/15/19', '2/16/19', '2/17/19', '2/18/19', '2/19/19', '2/20/19', '2/21/19', '2/22/19', '2/23/19', '2/24/19', '2/25/19', '2/26/19', '2/27/19', '2/28/19', '2/29/19', '2/30/19', '2/31/19']
        const yeardata = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

       

        const barWidth = Dimensions.get('screen').width - 30;
        const innerbarWidthweek1 = '90%';
        const innerbarWidthweek2 = '80%';
        const innerbarWidthweek3 = '90%';
        const innerbarWidthmonth1 = '60%';
        const innerbarWidthmonth2 = '95%';
        const innerbarWidthmonth3 = '70%';
        const innerbarWidthyear1 = '88%';
        const innerbarWidthyear2 = '60%';
        const innerbarWidthyear3 = '99%';

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
        const CustomGrid = ({ x, y, contentdata, ticks }) => (
            <G>
                {
                    // Horizontal grid
                    ticks.map(tick => (
                        <Line
                            key={tick}
                            x1={'0%'}
                            x2={'100%'}
                            y1={y(tick)}
                            y2={y(tick)}
                            stroke={'rgba(0,0,0,0.2)'}
                            strokeDasharray="3 2"
                        />
                    ))
                }
                {
                    // Vertical grid
                    contentdata .map((_, index) => (
                        <Line
                            key={index}
                            y1={'0%'}
                            y2={'100%'}
                            x1={x(index)}
                            x2={x(index)}
                            stroke={'rgba(0,0,0,0.2)'}
                            strokeDasharray="3 2"
                        />
                    ))
                }
            </G>
        )
        const datass = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

        const contentInset = { top: 20, bottom: 20 }
        const Decorator = ({ x, y, contents ,color}) => {
            return contents.map((value, index) => (
                <Circle
                    key={index}
                    cx={x(index)}
                    cy={y(value)}
                    r={4}
                    stroke={color}
                    fill={'white'}
                />
            ))
        }
        return (

            <StyleProvider style={getTheme(material)}>
                <Container>

                     <Header>
                        <Left style={{ flex: 0, width: '10%' }}>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon type='Entypo' name='chevron-thin-left' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </Button>
                        </Left>
                        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , width: '80%', }}>
                            <Title style={{
                                fontFamily: 'Arial Rounded MT Bold', fontSize: 20, fontWeight: "bold",
                                fontStyle: "normal",
                            }}>On-Scene Time</Title>
                        </Body>
                        <Right style={{ flex: 0, width: '10%' }}>
                        </Right>
                    </Header>
                    <Header hasSegment style={{ backgroundColor: 'white' }}>

                        <Body>
                            <Segment style={{ width: 300, borderRadius: 14, }}>
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
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Your Average</Text>
                            <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: innerbarWidthweek1, backgroundColor: '#F7941D', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>35 min</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Target</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: innerbarWidthweek2, backgroundColor: '#fab007', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>23 min</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Team Average</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: innerbarWidthweek3, backgroundColor: '#e67702', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>25 min</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={{ fontFamily: "avenir light", fontSize: 12, textAlign: 'center', color: '#A7A9AC' }}>Last updated 2 days ago
                            </Text>
                            <View style={styles.separator} />
                            <View style={{ marginTop: 15, marginBottom: 15, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/happy3.png')} />
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/happy4.png')} />
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/meh2.png')} />
                            </View>
                            <Text style={{ width: '50%', marginBottom: 15, marginLeft: '25%', marginRight: '25%', fontFamily: "avenir light", fontSize: 20, textAlign: 'center', }}>Very Good!
                            </Text>
                            <Text style={{ width: '80%', marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 12, textAlign: 'center', flex: 1, color: '#A7A9AC' }}>Your performance exceeds the average required!
Keep up the good work!
                            </Text>
                            <View style={[styles.separator, { marginTop: 15 }]} />

                           <View style={{ height: 200, marginLeft: 20 }}>
                                <YAxis style={[StyleSheet.absoluteFill, { marginLeft: -(Dimensions.get('screen').width - 5) }]} spacingInner={.9}
                                    spacingOuter={1}
                                    data={datass}
                                    contentInset={contentInset}
                                    svg={{
                                        fill: 'grey',
                                        fontSize: 10,
                                    }}
                                    numberOfTicks={9}
                                    formatLabel={value => value}
                                />
                                <LineChart curve={shape.curveNatural}
                                    style={{ flex: 1 }}
                                    data={data1}
                                    svg={{ stroke: '#F5A623', strokeWidth: 1 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
                                >
                                    <CustomGrid  contentdata = {weekdata} belowChart={false} />
                                    <Decorator color='#F5A623' contents={data1} />
                                </LineChart>
                                <LineChart curve={shape.curveNatural}
                                    style={StyleSheet.absoluteFill}
                                    data={data2}
                                    svg={{ stroke: '#F2816F', strokeWidth: 2 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
                                />

                                <LineChart curve={shape.curveNatural}
                                    style={StyleSheet.absoluteFill}
                                    data={data3}
                                    svg={{ stroke: '#883100', strokeWidth: 1 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
                                >

                                    <Decorator color='#883100' contents={data3} />
                                </LineChart>


                            </View>
                            <XAxis  
                             style={{height: 60}}                             
                                contentInset={{ left: 10, right: 10 }}
                                data={weekdata}
                                svg={{
                                    fill: 'black',
                                    fontFamily: 'avenir light',
                                    fontSize: 14,
                                    rotation: 270,
                                    originY: 20,
                                   y: 18,

                                }}
                                formatLabel={(value, index) => weekdata[index]}
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
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Your Average</Text>
                            <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: innerbarWidthmonth1, backgroundColor: '#F7941D', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>30 min</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Target</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: innerbarWidthmonth2, backgroundColor: '#fab007', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>33 min</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Team Average</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: innerbarWidthmonth3, backgroundColor: '#e67702', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>28 min</Text>
                                    </View>
                                </View>
                            </View>
                        <Text style={{ fontFamily: "avenir light", fontSize: 12, textAlign: 'center', color: '#A7A9AC' }}>Last updated 2 days ago
                        </Text>
                        <View style={styles.separator} />
                        <View style={{ marginTop: 15, marginBottom: 15, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/happy3.png')} />
                            <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/happy4.png')} />
                            <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/meh2.png')} />
                        </View>
                        <Text style={{ width: '50%', marginBottom: 15, marginLeft: '25%', marginRight: '25%', fontFamily: "avenir light", fontSize: 20, textAlign: 'center', }}>Very Good!
                        </Text>
                        <Text style={{ width: '80%', marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 12, textAlign: 'center', flex: 1, color: '#A7A9AC' }}>Your performance exceeds the average required!
Keep up the good work!
                        </Text>
                        <View style={[styles.separator, { marginTop: 15 }]} />

                        <View style={{ height: 200, marginLeft: 10 }}>
                                <YAxis style={[StyleSheet.absoluteFill, { marginLeft: -(Dimensions.get('screen').width - 5) }]} spacingInner={.9}
                                    spacingOuter={1}
                                    data={datass}
                                    contentInset={contentInset}
                                    svg={{
                                        fill: 'grey',
                                        fontSize: 10,
                                    }}
                                    numberOfTicks={9}
                                    formatLabel={value => value}
                                />
                                <LineChart curve={shape.curveNatural}
                                    style={{ flex: 1 }}
                                    data={data11}
                                    svg={{ stroke: '#F5A623', strokeWidth: 1 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
                                >
                                    <CustomGrid  contentdata = {monthdata} belowChart={false} />
                                    <Decorator color='#F5A623' contents={data11} />
                                </LineChart>
                                <LineChart curve={shape.curveNatural}
                                    style={StyleSheet.absoluteFill}
                                    data={data12}
                                    svg={{ stroke: '#F2816F', strokeWidth: 2 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
                                />

                                <LineChart curve={shape.curveNatural}
                                    style={StyleSheet.absoluteFill}
                                    data={data13}
                                    svg={{ stroke: '#883100', strokeWidth: 1 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
                                >
                                    <Decorator color='#883100' contents={data13} />
                                </LineChart>
                            </View>
                            <XAxis  
                             style={{height: 40}}                             
                                contentInset={{ left: 10, right: 10 }}
                                data={monthdata}
                                svg={{
                                    fill: 'black',
                                    fontFamily: 'avenir light',
                                    fontSize: 10,
                                    rotation: 270,
                                    originY: 20,
                                   y: 20,

                                }}
                                formatLabel={(value, index) => monthdata[index]}
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
                        {this.state.selected === 3 && <View>
                            <View style={{ justifyContent: 'center', flex: 1, flexDirection: 'column', marginLeft: 5, marginRight: 5 }}>
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Your Average</Text>
                            <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: innerbarWidthyear1, backgroundColor: '#F7941D', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>26 min</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Target</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: innerbarWidthyear2, backgroundColor: '#fab007', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>30 min</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Team Average</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: innerbarWidthyear3, backgroundColor: '#e67702', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>33 min</Text>
                                    </View>
                                </View>
                            </View>
                        <Text style={{ fontFamily: "avenir light", fontSize: 12, textAlign: 'center', color: '#A7A9AC' }}>Last updated 2 days ago
                        </Text>
                        <View style={styles.separator} />
                        <View style={{ marginTop: 15, marginBottom: 15, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/happy3.png')} />
                            <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/happy4.png')} />
                            <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/meh2.png')} />
                        </View>
                        <Text style={{ width: '50%', marginBottom: 15, marginLeft: '25%', marginRight: '25%', fontFamily: "avenir light", fontSize: 20, textAlign: 'center', }}>Very Good!
                        </Text>
                        <Text style={{ width: '80%', marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 12, textAlign: 'center', flex: 1, color: '#A7A9AC' }}>Your performance exceeds the average required!
Keep up the good work!
                        </Text>
                        <View style={[styles.separator, { marginTop: 15 }]} />

                       <View style={{ height: 200, marginLeft: 10 }}>
                                <YAxis style={[StyleSheet.absoluteFill, { marginLeft: -(Dimensions.get('screen').width - 5) }]} spacingInner={.9}
                                    spacingOuter={1}
                                    data={datass}
                                    contentInset={contentInset}
                                    svg={{
                                        fill: 'grey',
                                        fontSize: 10,
                                    }}
                                    numberOfTicks={9}
                                    formatLabel={value => value}
                                />
                                <LineChart curve={shape.curveNatural}

                                    style={{ flex: 1 }}
                                    data={data21}
                                    svg={{ stroke: '#F5A623', strokeWidth: 1 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
                                >

                                    <CustomGrid  contentdata = {yeardata} belowChart={false} />
                                    <Decorator color='#F5A623' contents={data21} />
                                </LineChart>
                                <LineChart curve={shape.curveNatural}
                                    style={StyleSheet.absoluteFill}
                                    data={data22}
                                    svg={{ stroke: '#F2816F', strokeWidth: 2 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
                                />

                                <LineChart curve={shape.curveNatural}
                                    style={StyleSheet.absoluteFill}
                                    data={data23}
                                    svg={{ stroke: '#883100', strokeWidth: 1 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
                                >
                                    <Decorator color='#883100' contents={data23} />
                                </LineChart>
                            </View>
                            <XAxis  
                             style={{height: 60}}                             
                                contentInset={{ left: 10, right: 10 }}
                                data={yeardata}
                                svg={{
                                    fill: 'black',
                                    fontFamily: 'avenir light',
                                    fontSize: 14,
                                    rotation: 270,
                                    originY: 20,
                                   y: 18,

                                }}
                                formatLabel={(value, index) => yeardata[index]}
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