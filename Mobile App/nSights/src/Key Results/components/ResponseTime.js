

import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Segment, Icon, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, ActivityIndicator, Dimensions, TextInput, ProgressBarAndroid, Image, ImageBackground, View, Linking, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from "react-native-easy-grid";
import { BarChart, XAxis, AreaChart, LineChart, YAxis, Grid as Grid1 } from 'react-native-svg-charts'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Svg, { Circle } from 'react-native-svg'
import * as scale from 'd3-scale'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');



export default class ResponseTime extends Component {

    constructor(props) {
        super(props);

    }
    state = { selected: 1 }
    render() {
        const data1 = [80, 60, 74, 95, 85, 91, 70,]
        const data2 = [50, 50, 50, 50, 50, 50, 50]
        const data3 = [70, 80, 30, 20, 70, 50, 61,]

        const data11 = [10, 50, 48, 95, 30, 75, 60,]
        const data12 = [50, 50, 50, 50, 50, 50, 50]
        const data13 = [70, 80, 70, 50, 80, 80, 71,]

        const data21 = [10, 50, 48, 95, 30, 75, 60,].reverse()
        const data22 = [50, 50, 50, 50, 50, 50, 50]
        const data23 = [70, 80, 30, 20, 70, 50, 61,].reverse()


        const data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']



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

                    <Header>
                        <Left style={{ flex: 0, width: '10%' }}>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon type='Entypo' name='chevron-thin-left' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </Button>
                        </Left>
                        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '80%', }}>
                            <Title style={{
                                fontFamily: 'Arial Rounded MT Bold', fontSize: 20, fontWeight: "bold",
                                fontStyle: "normal",
                            }}>Response Time</Title>
                        </Body>
                        <Right style={{ flex: 0, width: '10%' }}>
                        </Right>
                    </Header>

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
                                        value={30}
                                    />
                                </View>
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Target Time         </Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <ProgressBarAnimated
                                        {...progressTargetStyles}
                                        width={barWidth}
                                        height={28}
                                        value={50}
                                    />
                                </View>
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Team Average Time
                    </Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <ProgressBarAnimated
                                        {...progressTeamAverageStyles}
                                        width={barWidth}
                                        height={28}
                                        value={20}
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
                            <Text style={{ width: '50%', marginBottom: 15, marginLeft: '25%', marginRight: '25%', fontFamily: "avenir light", fontSize: 20, textAlign: 'center', }}>Onward!
                    </Text>
                            <Text style={{ width: '100%', fontFamily: "avenir light", fontSize: 12, textAlign: 'center', flex: 1, color: '#A7A9AC' }}>According to the test results, we can offer you assistance
                    </Text>
                            <View style={{ marginTop: 15 }}>
                                <Grid >
                                    <Row>
                                        <TouchableOpacity style={{ borderWidth: 1, marginBottom: 15, borderColor: '#f7941d', width: '100%', borderRadius: 5 }} onPress={() => Linking.openURL('http://google.com')}>
                                            <View style={{ padding: 10 }}>
                                                <Text style={{ fontFamily: "avenir light", fontSize: 14 }}>
                                                    How to deal with stress
                                </Text>
                                                <Text style={{ color: 'grey', fontFamily: "avenir light", fontSize: 12 }}>
                                                    med.com
                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </Row>
                                    <Row>
                                        <TouchableOpacity style={{ borderWidth: 1, marginBottom: 15, borderColor: '#f7941d', width: '100%', borderRadius: 5 }} onPress={() => Linking.openURL('http://google.com')}>
                                            <View style={{ padding: 10 }}>
                                                <Text style={{ fontFamily: "avenir light", fontSize: 14 }}>
                                                    What to do if you suffer from insomnia?
                                </Text>
                                                <Text style={{ color: 'grey', fontFamily: "avenir light", fontSize: 12 }}>
                                                    med.com
                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </Row>




                                </Grid>
                            </View>
                            <View style={styles.separator} />
                            <View style={{ height: 200, marginLeft: 10 }}>
                                <LineChart
                                    style={{ flex: 1 }}
                                    data={data1}
                                    svg={{ stroke: '#F7941D', strokeWidth: 4 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
                                >

                                </LineChart>
                                <LineChart
                                    style={StyleSheet.absoluteFill}
                                    data={data2}
                                    svg={{ stroke: '#975A16', strokeWidth: 4 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
                                />

                                <LineChart
                                    style={StyleSheet.absoluteFill}
                                    data={data3}
                                    svg={{ stroke: '#E67702', strokeWidth: 4 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
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
                                        value={70}
                                    />
                                </View>
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Target Time         </Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <ProgressBarAnimated
                                        {...progressTargetStyles}
                                        width={barWidth}
                                        height={28}
                                        value={20}
                                    />
                                </View>
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Team Average Time
                </Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <ProgressBarAnimated
                                        {...progressTeamAverageStyles}
                                        width={barWidth}
                                        height={28}
                                        value={40}
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
                            <Text style={{ width: '50%', marginBottom: 15, marginLeft: '25%', marginRight: '25%', fontFamily: "avenir light", fontSize: 20, textAlign: 'center', }}>Onward!
                </Text>
                            <Text style={{ width: '100%', fontFamily: "avenir light", fontSize: 12, textAlign: 'center', flex: 1, color: '#A7A9AC' }}>According to the test results, we can offer you assistance
                </Text>
                            <View style={{ marginTop: 15 }}>
                                <Grid >
                                    <Row>
                                        <TouchableOpacity style={{ borderWidth: 1, marginBottom: 15, borderColor: '#f7941d', width: '100%', borderRadius: 5 }} onPress={() => Linking.openURL('http://google.com')}>
                                            <View style={{ padding: 10 }}>
                                                <Text style={{ fontFamily: "avenir light", fontSize: 14 }}>
                                                    How to deal with stress
                            </Text>
                                                <Text style={{ color: 'grey', fontFamily: "avenir light", fontSize: 12 }}>
                                                    med.com
                            </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </Row>
                                    <Row>
                                        <TouchableOpacity style={{ borderWidth: 1, marginBottom: 15, borderColor: '#f7941d', width: '100%', borderRadius: 5 }} onPress={() => Linking.openURL('http://google.com')}>
                                            <View style={{ padding: 10 }}>
                                                <Text style={{ fontFamily: "avenir light", fontSize: 14 }}>
                                                    What to do if you suffer from insomnia?
                            </Text>
                                                <Text style={{ color: 'grey', fontFamily: "avenir light", fontSize: 12 }}>
                                                    med.com
                            </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </Row>




                                </Grid>
                            </View>
                            <View style={styles.separator} />
                            <View style={{ height: 200, marginLeft: 10 }}>
                                <LineChart
                                    style={{ flex: 1 }}
                                    data={data11}
                                    svg={{ stroke: '#F7941D', strokeWidth: 4 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
                                >

                                </LineChart>
                                <LineChart
                                    style={StyleSheet.absoluteFill}
                                    data={data12}
                                    svg={{ stroke: '#975A16', strokeWidth: 4 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
                                />

                                <LineChart
                                    style={StyleSheet.absoluteFill}
                                    data={data13}
                                    svg={{ stroke: '#E67702', strokeWidth: 4 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
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
                        {this.state.selected === 3 && <View>
                            <View style={{ justifyContent: 'center', flex: 1, flexDirection: 'column', marginLeft: 5, marginRight: 5 }}>
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Your Average Time
      </Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <ProgressBarAnimated
                                        {...progressAverageStyles}
                                        width={barWidth}
                                        height={28}
                                        value={50}
                                    />
                                </View>
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Target Time         </Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <ProgressBarAnimated
                                        {...progressTargetStyles}
                                        width={barWidth}
                                        height={28}
                                        value={10}
                                    />
                                </View>
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Team Average Time
                </Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <ProgressBarAnimated
                                        {...progressTeamAverageStyles}
                                        width={barWidth}
                                        height={28}
                                        value={80}
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
                            <Text style={{ width: '50%', marginBottom: 15, marginLeft: '25%', marginRight: '25%', fontFamily: "avenir light", fontSize: 20, textAlign: 'center', }}>Onward!
                </Text>
                            <Text style={{ width: '100%', fontFamily: "avenir light", fontSize: 12, textAlign: 'center', flex: 1, color: '#A7A9AC' }}>According to the test results, we can offer you assistance
                </Text>
                            <View style={{ marginTop: 15 }}>
                                <Grid >
                                    <Row>
                                        <TouchableOpacity style={{ borderWidth: 1, marginBottom: 15, borderColor: '#f7941d', width: '100%', borderRadius: 5 }} onPress={() => Linking.openURL('http://google.com')}>
                                            <View style={{ padding: 10 }}>
                                                <Text style={{ fontFamily: "avenir light", fontSize: 14 }}>
                                                    How to deal with stress
                            </Text>
                                                <Text style={{ color: 'grey', fontFamily: "avenir light", fontSize: 12 }}>
                                                    med.com
                            </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </Row>
                                    <Row>
                                        <TouchableOpacity style={{ borderWidth: 1, marginBottom: 15, borderColor: '#f7941d', width: '100%', borderRadius: 5 }} onPress={() => Linking.openURL('http://google.com')}>
                                            <View style={{ padding: 10 }}>
                                                <Text style={{ fontFamily: "avenir light", fontSize: 14 }}>
                                                    What to do if you suffer from insomnia?
                            </Text>
                                                <Text style={{ color: 'grey', fontFamily: "avenir light", fontSize: 12 }}>
                                                    med.com
                            </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </Row>




                                </Grid>
                            </View>
                            <View style={styles.separator} />
                            <View style={{ height: 200, marginLeft: 10 }}>
                                <LineChart
                                    style={{ flex: 1 }}
                                    data={data21}
                                    svg={{ stroke: '#F7941D', strokeWidth: 4 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
                                >

                                </LineChart>
                                <LineChart
                                    style={StyleSheet.absoluteFill}
                                    data={data22}
                                    svg={{ stroke: '#975A16', strokeWidth: 4 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
                                />

                                <LineChart
                                    style={StyleSheet.absoluteFill}
                                    data={data23}
                                    svg={{ stroke: '#E67702', strokeWidth: 4 }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                    yMin={10}
                                    yMax={100}
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

});