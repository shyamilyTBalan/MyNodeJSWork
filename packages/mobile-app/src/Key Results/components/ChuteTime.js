

import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Segment, Input, Thumbnail, Item, Footer, FooterTab, Icon, Label, List, ListItem, Button, Left, Right, Body, StyleProvider, Card, CardItem } from 'native-base';
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

    }
    state = { selected: 1, value: 0,
        inputs :   {
            "ChuteTime": {
                "week": {
                    "innerbarWidthweek1" : "30%",
                    "innerbarWidthweek2" : "55%",
                    "innerbarWidthweek3" : "50%",
                    "tweek1" : "28 min",
                    "tweek2" : "23 min",
                    "tweek3" : "20 min"
                },
                "month": {
                    "innerbarWidthmonth1" : "45%",
                    "innerbarWidthmonth2" : "50%",
                    "innerbarWidthmonth3" : "30%",
                    "tmonth1" : "27 min",
                    "tmonth2" : "30 min",
                    "tmonth3" : "35 min",
                },
                "year": {
                    "innerbarWidthyear1" : "35%",
                    "innerbarWidthyear2" : "55%",
                    "innerbarWidthyear3" : "40%",
                    "tyear1" : "30 min",
                    "tyear2" : "25 min",
                    "tyear3" : "33 min"
                },
                "imojies": {
                    "smile1": require('../../../assets/images/happy3.png'),
                    "smile2": require('../../../assets/images/meh3.png'),
                    "smile3": require('../../../assets/images/smile4.png')

                }
            }
        }
    }
    render() {
        const radio_props = [
            { label: 'Yes  ', value: 0 },
            { label: 'No  ', value: 1 },
            { label: 'Not Sure', value: 2 }
        ];
        const data1 = [80, 60, 74, 95, 85, 91, 70,]
        const data2 = [50, 50, 50, 50, 50, 50, 50]

        const data3 = [70, 80, 70, 50, 80, 80, 71,]

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
                        <Left style={{ flex: 1 }}>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon type='Entypo' name='chevron-thin-left' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </Button>
                        </Left>
                        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Title style={{
                                fontFamily: 'Arial Rounded MT Bold', fontSize: 20, fontWeight: "bold",
                                fontStyle: "normal",
                            }}>Chute Time</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
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
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Your Average</Text>
                            <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: this.state.inputs.ChuteTime.week.innerbarWidthweek1, backgroundColor: '#F7941D', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>{this.state.inputs.ChuteTime.week.tweek1}</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Target</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: this.state.inputs.ChuteTime.week.innerbarWidthweek2, backgroundColor: '#fab007', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>{this.state.inputs.ChuteTime.week.tweek2}</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Team Average</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: this.state.inputs.ChuteTime.week.innerbarWidthweek3, backgroundColor: '#e67702', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>{this.state.inputs.ChuteTime.week.tweek3}</Text>
                                    </View>
                                </View>
                            </View>

                            <Text style={{ fontFamily: "avenir light", fontSize: 12, textAlign: 'center', color: '#A7A9AC' }}>Last updated 2 days ago
                        </Text>
                            <View style={styles.separator} />
                            <View style={{ marginTop: 15, marginBottom: 15, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={this.state.inputs.ChuteTime.imojies.smile1} />
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={this.state.inputs.ChuteTime.imojies.smile2} />
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={this.state.inputs.ChuteTime.imojies.smile3} />
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
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Your Average</Text>
                               
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: this.state.inputs.ChuteTime.month.innerbarWidthmonth1, backgroundColor: '#F7941D', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>{this.state.inputs.ChuteTime.month.tmonth1}</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Target</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: this.state.inputs.ChuteTime.month.innerbarWidthmonth2, backgroundColor: '#fab007', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>{this.state.inputs.ChuteTime.month.tmonth2}</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Team Average
                            </Text>
                            <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: this.state.inputs.ChuteTime.month.innerbarWidthmonth3, backgroundColor: '#e67702', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>{this.state.inputs.ChuteTime.month.tmonth3}</Text>
                                    </View>
                                </View>
                            </View>

                            <Text style={{ fontFamily: "avenir light", fontSize: 12, textAlign: 'center', color: '#A7A9AC' }}>Last updated 2 days ago
                    </Text>
                            <View style={styles.separator} />
                            <View style={{ marginTop: 15, marginBottom: 15, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={this.state.inputs.ChuteTime.imojies.smile1} />
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={this.state.inputs.ChuteTime.imojies.smile2} />
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={this.state.inputs.ChuteTime.imojies.smile3} />
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
                                        <View style={{ marginTop: 10, marginBottom: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-around', fontFamily: "avenir light" }}>
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
                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Your Average</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: this.state.inputs.ChuteTime.year.innerbarWidthyear1, backgroundColor: '#F7941D', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>{this.state.inputs.ChuteTime.year.tyear1}</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Target</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: this.state.inputs.ChuteTime.year.innerbarWidthyear2, backgroundColor: '#fab007', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>{this.state.inputs.ChuteTime.year.tyear2}</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "avenir light", fontSize: 16, }}>Team Average</Text>
                                <View style={{ width: barWidth, backgroundColor: '#F3F3F3', height: 28, borderRadius: 14, marginBottom: 15 }}>
                                    <View style={{width: this.state.inputs.ChuteTime.year.innerbarWidthyear3, backgroundColor: '#e67702', height: 28, borderRadius: 14, marginBottom: 15 , alignItems: 'flex-end'}}> 
                                    <Text style={{color: '#ffffff',fontFamily: "avenir light",fontSize: 14 , marginRight: 10, marginTop: 3}}>{this.state.inputs.ChuteTime.year.tyear3}</Text>
                                    </View>
                                </View>
                            </View>

                            <Text style={{ fontFamily: "avenir light", fontSize: 12, textAlign: 'center', color: '#A7A9AC' }}>Last updated 2 days ago
                    </Text>
                            <View style={styles.separator} />
                            <View style={{ marginTop: 15, marginBottom: 15, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={this.state.inputs.ChuteTime.imojies.smile1} />
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={this.state.inputs.ChuteTime.imojies.smile2} />
                                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={this.state.inputs.ChuteTime.imojies.smile3} />
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
                                        <View style={{ marginTop: 10, marginBottom: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-around', fontFamily: "avenir light" }}>
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