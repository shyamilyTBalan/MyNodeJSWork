

import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Segment, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem, Icon, Button, Left, Right, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, ActivityIndicator, Dimensions, TextInput, ProgressBarAndroid, Image, ImageBackground, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from "react-native-easy-grid";
import { BarChart, XAxis, AreaChart, LineChart, YAxis, Grid as Grid1 } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Svg, { Circle, G, Line, Rect, Path, Text as Text1 } from 'react-native-svg'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
import ProgressBarAnimated from 'react-native-progress-bar-animated';


const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');



export default class HospitalTurnaroudTime extends Component {

    constructor(props) {
        super(props);

    }
    state = { selected: 1 }
    render() {

        const data1 = [70, 80, 80, 95, 50, 60, 85]
        const data2 = [50, 50, 50, 50, 50, 50, 50]
        const data3 = [50, 65, 60, 95, 40, 60, 60,]

        const data11 = [50, 60, 70, 90, 60, 50, 95,]
        const data12 = [50, 50, 50, 50, 50, 50, 50]
        const data13 = [80, 62, 52, 75, 90, 54, 60,]

        const data21 = [50, 60, 70, 90, 60, 50, 95,].reverse()
        const data22 = [50, 50, 50, 50, 50, 50, 50]
        const data23 = [80, 62, 52, 75, 90, 54, 60,].reverse()


        const data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']


        const barWidth = Dimensions.get('screen').width - 30;
        const innerbarWidthweek1 = '70%';
        const innerbarWidthweek2 = '80%';
        const innerbarWidthweek3 = '90%';
        const innerbarWidthmonth1 = '90%';
        const innerbarWidthmonth2 = '60%';
        const innerbarWidthmonth3 = '65%';
        const innerbarWidthyear1 = '85%';
        const innerbarWidthyear2 = '70%';
        const innerbarWidthyear3 = '95%';

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

        const Labels = ({ x, y, bandwidth }) => {
            return data1.map((value, index) => (

                <Text1
                    key={index}
                    x={x(index) + (bandwidth / 2)}
                    y={value < 20 ? y(value) - 10 : y(value) + 15}
                    fontSize={14}
                    fill={value >= 20 ? 'white' : 'black'}
                    alignmentBaseline={'middle'}
                    textAnchor={'middle'}
                >
                    {value}
                </Text1>
            ))
        }

        const Tooltip = ({ x, y }) => {
            return data1.map(value => (
                <G
                    x={0}
                    key={'tooltip'}
                    onPress={() => console.log('tooltip clicked')}
                >
                    <G y={50}>
                        <Text1
                            x={0}
                            dy={20}
                            alignmentBaseline={'middle'}
                            textAnchor={'middle'}
                            stroke={'rgb(134, 65, 244)'}
                        >
                            {value}
                        </Text1>
                    </G>
                </G>
            ))
        }
        const CustomGrid = ({ x, y, data, ticks }) => (
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
                    data.map((_, index) => (
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
        const Decorator = ({ x, y, contents }) => {
            return contents.map((value, index) => (
                <Circle
                    key={index}
                    cx={x(index)}
                    cy={y(value)}
                    r={4}
                    stroke={'#975A16'}
                    fill={'white'}
                />
            ))
        }
        // const Decorator = ({ x, y, contents }) => {
        //     const arrayLength = contents.length - 1
        //     return contents.map((value, index) => {
        //         if (index == 0)
        //             return <View>

        //                 <G y={y(value)} >

        //                     <Text1
        //                         x={x(index)}
        //                         dy={20}
        //                         alignmentBaseline={'after-edge'}
        //                         textAnchor={'start'}
        //                         stroke={'#975A16'}
        //                     >

        //                         {`${value}`}
        //                     </Text1>
        //                 </G>
        //                 <G x={0}  >

        //                     <Circle
        //                         key={index}
        //                         cx={x(index)}
        //                         cy={y(value)}
        //                         r={4}
        //                         stroke={'#975A16'}
        //                         fill={'rgba(255, 255, 255, .4)'}
        //                     />
        //                 </G>
        //             </View>
        //         else if (index == arrayLength)
        //             return <View>

        //                 <G y={y(value)} >

        //                     <Text1
        //                         x={x(index)}
        //                         dy={20}
        //                         alignmentBaseline={'after-edge'}
        //                         textAnchor={'end'}
        //                         stroke={'#975A16'}
        //                     >

        //                         {`${value}`}
        //                     </Text1>
        //                 </G>
        //                 <G x={0}  >

        //                     <Circle
        //                         key={index}
        //                         cx={x(index)}
        //                         cy={y(value)}
        //                         r={4}
        //                         stroke={'#975A16'}
        //                         fill={'rgba(255, 255, 255, .4)'}
        //                     />
        //                 </G>
        //             </View>
        //         else return <View>

        //             <G y={y(value)} >

        //                 <Text1
        //                     x={x(index)}
        //                     dy={10}
        //                     alignmentBaseline={'middle'}
        //                     textAnchor={'middle'}
        //                     stroke={'#975A16'}
        //                 >

        //                     {`${value}`}
        //                 </Text1>
        //             </G>
        //             <G x={0}  >
        //                 <Circle
        //                     key={index}
        //                     cx={x(index)}
        //                     cy={y(value)}
        //                     r={4}
        //                     stroke={'#975A16'}
        //                     fill={'rgba(255, 255, 255, .4)'}
        //                 />
        //             </G>
        //         </View>

        //     })
        // }
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Header>
                        <Left style={{ flex: 0, width: '10%' }}>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon type='Entypo' name='chevron-thin-left' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </Button>
                        </Left>
                        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '90%', }}>
                            <Title style={{
                                fontFamily: 'Arial Rounded MT Bold', fontSize: 20, fontWeight: "bold",
                                fontStyle: "normal",
                            }}>Hospital Turnaround Time</Title>
                        </Body>
                        <Right style={{ flex: 0, }}>
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
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Your Average
                  </Text>
                                {/* <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <ProgressBarAnimated
                                        {...progressAverageStyles}
                                        width={barWidth}
                                        height={28}
                                        value={70}
                                    />
                                </View> */}
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{ width: innerbarWidthweek1, backgroundColor: '#F7941D', height: 28, borderRadius: 14, marginBottom: 15, alignItems: 'flex-end' }}>
                                        <Text style={{ color: '#ffffff', fontFamily: "avenir light", fontSize: 14, marginRight: 10, marginTop: 2 }}>27 min</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Target</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{ width: innerbarWidthweek2, backgroundColor: '#fab007', height: 28, borderRadius: 14, marginBottom: 15, alignItems: 'flex-end' }}>
                                        <Text style={{ color: '#ffffff', fontFamily: "avenir light", fontSize: 14, marginRight: 10, marginTop: 2 }}>30 min</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Team Average
                            </Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{ width: innerbarWidthweek3, backgroundColor: '#e67702', height: 28, borderRadius: 14, marginBottom: 15, alignItems: 'flex-end' }}>
                                        <Text style={{ color: '#ffffff', fontFamily: "avenir light", fontSize: 14, marginRight: 10, marginTop: 2 }}>35 min</Text>
                                    </View>
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
                                    <CustomGrid belowChart={false} />
                                    <Decorator contents={data1} />
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

                                    <Decorator contents={data3} />
                                </LineChart>


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
                                                fill="#F5A623"
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
                                                fill="#F2816F"
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
                                                fill="#883100"
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
                                    <View style={{ width: innerbarWidthmonth1, backgroundColor: '#F7941D', height: 28, borderRadius: 14, marginBottom: 15, alignItems: 'flex-end' }}>
                                        <Text style={{ color: '#ffffff', fontFamily: "avenir light", fontSize: 14, marginRight: 10, marginTop: 2 }}>28 min</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Target</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{ width: innerbarWidthmonth2, backgroundColor: '#fab007', height: 28, borderRadius: 14, marginBottom: 15, alignItems: 'flex-end' }}>
                                        <Text style={{ color: '#ffffff', fontFamily: "avenir light", fontSize: 14, marginRight: 10, marginTop: 2 }}>23 min</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Team Average</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{ width: innerbarWidthmonth3, backgroundColor: '#e67702', height: 28, borderRadius: 14, marginBottom: 15, alignItems: 'flex-end' }}>
                                        <Text style={{ color: '#ffffff', fontFamily: "avenir light", fontSize: 14, marginRight: 10, marginTop: 2 }}>20 min</Text>
                                    </View>
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
                                    <CustomGrid belowChart={false} />
                                    <Decorator contents={data11} />
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
                                    <Decorator contents={data13} />
                                </LineChart>
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
                                                fill="#F5A623"
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
                                                fill="#F2816F"
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
                                                fill="#883100"
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
                                    <View style={{ width: innerbarWidthyear1, backgroundColor: '#F7941D', height: 28, borderRadius: 14, marginBottom: 15, alignItems: 'flex-end' }}>
                                        <Text style={{ color: '#ffffff', fontFamily: "avenir light", fontSize: 14, marginRight: 10, marginTop: 2 }}>30 min</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Target</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{ width: innerbarWidthyear2, backgroundColor: '#fab007', height: 28, borderRadius: 14, marginBottom: 15, alignItems: 'flex-end' }}>
                                        <Text style={{ color: '#ffffff', fontFamily: "avenir light", fontSize: 14, marginRight: 10, marginTop: 2 }}>25 min</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Team Average</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{ width: innerbarWidthyear3, backgroundColor: '#e67702', height: 28, borderRadius: 14, marginBottom: 15, alignItems: 'flex-end' }}>
                                        <Text style={{ color: '#ffffff', fontFamily: "avenir light", fontSize: 14, marginRight: 10, marginTop: 2 }}>33 min</Text>
                                    </View>
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

                                    <CustomGrid belowChart={false} />
                                    <Decorator contents={data21} />
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
                                    <Decorator contents={data23} />
                                </LineChart>
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
                                                fill="#F5A623"
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
                                                fill="#F2816F"
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
                                                fill="#883100"
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