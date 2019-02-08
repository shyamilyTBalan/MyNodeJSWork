

import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Segment, Input, Thumbnail, Item, Footer, FooterTab, Label, List, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, ActivityIndicator, Dimensions, TextInput, ProgressBarAndroid, Image, ImageBackground, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Col, Row, Grid } from "react-native-easy-grid";
import { BarChart, XAxis, AreaChart, LineChart, YAxis, Grid as Grid1 } from 'react-native-svg-charts'
import Svg, { Circle } from 'react-native-svg'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import * as scale from 'd3-scale'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');



export default class ChuteTime extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     value: 0
        // };
    }
    state = { selected: 1, value: 0 }
    render() {
        const radio_props = [
            { label: 'Yes  ', value: 0 },
            { label: 'No  ', value: 1 },
            { label: 'Not Sure', value: 2 }
        ];
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
                                        value={30}
                                    />
                                </View>
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Target Time         </Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <ProgressBarAnimated
                                        {...progressTargetStyles}
                                        width={barWidth}
                                        height={28}
                                        value={55}
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
                            <View style={{ marginTop: 15 }}>
                                <Grid style={{ backgroundColor: '#FDE5BE', }}>
                                    <Row>
                                        <Text style={{ width: '100%', marginTop: 10, marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 17, textAlign: 'center', flex: 1, }}>1. Are you valued or recognized
at your job?
</Text>
                                    </Row>
                                    <Row>
                                        <View style={{ marginTop: 10, marginBottom: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <RadioForm
                                                style={{ marginRight: 10, marginLeft: 15, paddingLeft: 15, paddingRight: 15 }}
                                                radio_props={radio_props}
                                                initial={0}
                                                formHorizontal={true}
                                                buttonColor={'#F7941D'}
                                                selectedButtonColor={'#F7941D'}
                                                buttonSize={10}
                                                buttonOuterSize={20}
                                                onPress={(value) => { this.setState({ value: value }) }}
                                            />
                                        </View>
                                    </Row>
                                    <Row>
                                        <Text style={{ width: '100%', marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 17, textAlign: 'center', flex: 1, }}>2. Do you feel that you have balance
                                        in your life?


</Text>
                                    </Row>
                                    <Row>
                                        <View style={{ marginTop: 10, marginBottom: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <RadioForm
                                                style={{ marginRight: 10, marginLeft: 15, paddingLeft: 15, paddingRight: 15 }}
                                                radio_props={radio_props}
                                                initial={0}
                                                formHorizontal={true}
                                                buttonColor={'#F7941D'}
                                                selectedButtonColor={'#F7941D'}
                                                buttonSize={10}
                                                buttonOuterSize={20}
                                                onPress={(value) => { this.setState({ value: value }) }}
                                            />
                                        </View>
                                    </Row>
                                    <Row>
                                        <Text style={{ width: '100%', marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 17, textAlign: 'center', flex: 1, }}>3. Do you have the time and resources
                                        to accomplish what you have to do?

</Text>
                                    </Row>
                                    <Row>
                                        <View style={{ marginTop: 10, marginBottom: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <RadioForm
                                                style={{ marginRight: 10, marginLeft: 15, paddingLeft: 15, paddingRight: 15 }}
                                                radio_props={radio_props}
                                                initial={0}
                                                formHorizontal={true}
                                                buttonColor={'#F7941D'}
                                                selectedButtonColor={'#F7941D'}
                                                buttonSize={10}
                                                buttonOuterSize={20}
                                                onPress={(value) => { this.setState({ value: value }) }}
                                            />
                                        </View>
                                    </Row>
                                </Grid>
                            </View>
                            <Grid>
                                <Row>

                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity style={[styles.button, styles.loginButton]}>
                                            <Text style={styles.loginText}>Submit</Text>
                                        </TouchableOpacity>
                                    </View>

                                </Row>
                            </Grid>


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
                                    value={45}
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
                                    value={30}
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
                        <View style={{ marginTop: 15 }}>
                            <Grid style={{ backgroundColor: '#FDE5BE', }}>
                                <Row>
                                    <Text style={{ width: '100%', marginTop: 10, marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 17, textAlign: 'center', flex: 1, }}>1. Are you valued or recognized
at your job?
</Text>
                                </Row>
                                <Row>
                                    <View style={{ marginTop: 10, marginBottom: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <RadioForm
                                            style={{ marginRight: 10, marginLeft: 15, paddingLeft: 15, paddingRight: 15 }}
                                            radio_props={radio_props}
                                            initial={0}
                                            formHorizontal={true}
                                            buttonColor={'#F7941D'}
                                            selectedButtonColor={'#F7941D'}
                                            buttonSize={10}
                                            buttonOuterSize={20}
                                            onPress={(value) => { this.setState({ value: value }) }}
                                        />
                                    </View>
                                </Row>
                                <Row>
                                    <Text style={{ width: '100%', marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 17, textAlign: 'center', flex: 1, }}>2. Do you feel that you have balance
                                    in your life?


</Text>
                                </Row>
                                <Row>
                                    <View style={{ marginTop: 10, marginBottom: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <RadioForm
                                            style={{ marginRight: 10, marginLeft: 15, paddingLeft: 15, paddingRight: 15 }}
                                            radio_props={radio_props}
                                            initial={0}
                                            formHorizontal={true}
                                            buttonColor={'#F7941D'}
                                            selectedButtonColor={'#F7941D'}
                                            buttonSize={10}
                                            buttonOuterSize={20}
                                            onPress={(value) => { this.setState({ value: value }) }}
                                        />
                                    </View>
                                </Row>
                                <Row>
                                    <Text style={{ width: '100%', marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 17, textAlign: 'center', flex: 1, }}>3. Do you have the time and resources
                                    to accomplish what you have to do?

</Text>
                                </Row>
                                <Row>
                                    <View style={{ marginTop: 10, marginBottom: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-around' , fontFamily: "avenir light"}}>
                                        <RadioForm
                                           
                                            radio_props={radio_props}
                                            initial={0}
                                            formHorizontal={true}
                                            buttonColor={'#F7941D'}
                                            selectedButtonColor={'#F7941D'}
                                            buttonSize={10}
                                            buttonOuterSize={20}
                                            onPress={(value) => { this.setState({ value: value }) }}
                                        />
                                    </View>
                                </Row>
                            </Grid>
                        </View>
                        <Grid>
                            <Row>

                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity style={[styles.button, styles.loginButton]}>
                                        <Text style={styles.loginText}>Submit</Text>
                                    </TouchableOpacity>
                                </View>

                            </Row>
                        </Grid>

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
                                    value={35}
                                />
                            </View>
                            <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Target Time         </Text>
                            <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                <ProgressBarAnimated
                                    {...progressTargetStyles}
                                    width={barWidth}
                                    height={28}
                                    value={55}
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
                        <Text style={{ width: '50%', marginBottom: 15, marginLeft: '25%', marginRight: '25%', fontFamily: "avenir light", fontSize: 20, textAlign: 'center', }}>Attention!
                    </Text>
                        <Text style={{ width: '80%', marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 12, textAlign: 'center', flex: 1, color: '#A7A9AC' }}>We've noticed a decline in your results
                    for a long time. Please take the survey so that
                    we can offer you solutions to this problem
                    </Text>
                        <View style={{ marginTop: 15 }}>
                            <Grid style={{ backgroundColor: '#FDE5BE', }}>
                                <Row>
                                    <Text style={{ width: '100%', marginTop: 10, marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 17, textAlign: 'center', flex: 1, }}>1. Are you valued or recognized
at your job?
</Text>
                                </Row>
                                <Row>
                                    <View style={{ marginTop: 10, marginBottom: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <RadioForm
                                            style={{ marginRight: 10, marginLeft: 15, paddingLeft: 15, paddingRight: 15 }}
                                            radio_props={radio_props}
                                            initial={0}
                                            formHorizontal={true}
                                            buttonColor={'#F7941D'}
                                            selectedButtonColor={'#F7941D'}
                                            buttonSize={10}
                                            buttonOuterSize={20}
                                            onPress={(value) => { this.setState({ value: value }) }}
                                        />
                                    </View>
                                </Row>
                                <Row>
                                    <Text style={{ width: '100%', marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 17, textAlign: 'center', flex: 1, }}>2. Do you feel that you have balance
                                    in your life?


</Text>
                                </Row>
                                <Row>
                                    <View style={{ marginTop: 10, marginBottom: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <RadioForm
                                            style={{ marginRight: 10, marginLeft: 15, paddingLeft: 15, paddingRight: 15 }}
                                            radio_props={radio_props}
                                            initial={0}
                                            formHorizontal={true}
                                            buttonColor={'#F7941D'}
                                            selectedButtonColor={'#F7941D'}
                                            buttonSize={10}
                                            buttonOuterSize={20}
                                            onPress={(value) => { this.setState({ value: value }) }}
                                        />
                                    </View>
                                </Row>
                                <Row>
                                    <Text style={{ width: '100%', marginLeft: '10%', marginRight: '10%', fontFamily: "avenir light", fontSize: 17, textAlign: 'center', flex: 1, }}>3. Do you have the time and resources
                                    to accomplish what you have to do?

</Text>
                                </Row>
                                <Row>
                                    <View style={{ marginTop: 10, marginBottom: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-around' , fontFamily: "avenir light"}}>
                                        <RadioForm
                                           
                                            radio_props={radio_props}
                                            initial={0}
                                            formHorizontal={true}
                                            buttonColor={'#F7941D'}
                                            selectedButtonColor={'#F7941D'}
                                            buttonSize={10}
                                            buttonOuterSize={20}
                                            onPress={(value) => { this.setState({ value: value }) }}
                                        />
                                    </View>
                                </Row>
                            </Grid>
                        </View>
                        <Grid>
                            <Row>

                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity style={[styles.button, styles.loginButton]}>
                                        <Text style={styles.loginText}>Submit</Text>
                                    </TouchableOpacity>
                                </View>

                            </Row>
                        </Grid>

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
        width: 200,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#f7941d",
    },
    loginText: {
        color: 'white',
    },
});