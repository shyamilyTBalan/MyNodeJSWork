import React, { Component } from 'react';
import { Container, Header, Title, Content, Input, Text, InputGroup, Item, Label, Footer, FooterTab, Button, Left, Right, Body, StyleProvider } from 'native-base';
import { Platform, Alert, StyleSheet, ScrollView, TextInput, Image, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import SampleAPI from '../../../SampleAPI';
import Home from '../../../src/Home/components/Home'
import remote from '../../Remote' 

export default class Login extends Component {
    constructor() {
        super();
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
        this.state = {     
            name: '',
            Password: '',
            isFocusedEmail: false,
            isFocusedPassword: false,
            borderColor: '#DEDEDE',
            data:
            {
                Username: 'John',
                Password: '123',
            }
        }
    } 
    focusNextField(id) {
        this.inputs[id].focus();
    }
    handleFocusEmail = event => {
        this.setState({
            isFocusedEmail: true
        });
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    };

    handleBlurEmail = event => {
        this.setState({
            isFocusedEmail: false
        });
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    };

    handleFocusPassword = event => {
        this.setState({
            isFocusedPassword: true
        });
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    };

    handleBlurPassword = event => {
        this.setState({
            isFocusedPassword: false
        });
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    };




    login = async () => {
       // const response = new remote().fetchJSON('api/auth/login','POST',{user_name: username, password: password})
        // const obj = new SampleAPI();
        // const response = await obj.authenticateUser(this.state.name ,this.state.Password);
        // if(response.message==="authenticated")
        // {
        //     this.props.navigation.navigate('Home') 
        // }
        if (this.state.name === this.state.data.Username && this.state.Password === this.state.data.Password) {
            this.props.navigation.navigate('Home')
        }
        else {
            Alert.alert("Login failed")
        }
    }

    render() {
        const { isFocusedEmail } = this.state;
        const { isFocusedPassword } = this.state;
        const { onFocus, onBlur } = this.props;
        return (
            <Content>
                <Container>
                    <View  style={styles.logoIcon}>
                        <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/group.png')} />
                    </View>
                    <View style={styles.container}>

                        <Text style={styles.logo}>nSights</Text>

                        <Label style={{ fontFamily: 'avenir light', alignSelf: 'flex-start', color: '#000000', marginBottom: 10, }}>Enter your email</Label>
                        <View style={styles.inputContainer}>
                            <TextInput
testID="username"
                                selectionColor={'#f7941d'}
                                onFocus={this.handleFocusEmail}
                                onBlur={this.handleBlurEmail}
                                placeholder="Enter your email"
                                blurOnSubmit={false}
                                onSubmitEditing={() => {
                                    this.focusNextField('Enter your password');
                                }}
                                returnKeyType={"next"}
                                style={[styles.textInput, { borderColor: isFocusedEmail ? '#f7941d' : '#D1D3D4' }]}
                                ref={input => {
                                    this.inputs['Enter your email'] = input;
                                }} placeholderTextColor="#939598"
                                // value={'John'}
                                value={this.state.name}
                                onChangeText={name => this.setState({ name })}
                            />
                        </View>
                        <Label style={{ fontFamily: 'avenir light', alignSelf: 'flex-start', color: '#000000', marginBottom: 10, }}>Enter your password</Label>
                        <View style={styles.inputContainer}>
                            <TextInput placeholder="Enter your password" selectionColor={'#f7941d'} testID="password"
                                onFocus={this.handleFocusPassword}
                                onBlur={this.handleBlurPassword}
                                blurOnSubmit={true}
                                returnKeyType={"done"}
                                style={[styles.textInput, { borderColor: isFocusedPassword ? '#f7941d' : '#D1D3D4' }]}
                                ref={input => {
                                    this.inputs['Enter your password'] = input;
                                }}
                                secureTextEntry={true} placeholderTextColor="#939598"
                                // value={'123'}
                                value={this.state.Password}
                                onChangeText={Password => this.setState({ Password })}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={this.login}>
                                <Text style={styles.loginText}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Container>

            </Content>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: '35%',
        width: '50%',
        height: 34,
        // fontFamily: "ArialRoundedMT",
        fontFamily: "Arial Rounded MT Bold",
        fontSize: 30,
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#000000"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginLeft: '10%',
        marginRight: '10%',
    },
    buttonContainer: {
        width: '100%',
        height: '40%',
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '30%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        height: '40%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#f7941d",
    },
    loginText: {
        color: 'white',
    },
    inputContainer: {
        width: '100%',
        height: '7%',
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        fontFamily: 'avenir light',
        width: '100%',
        height: '100%',
        borderRadius: 5,
        paddingLeft: 5,
        borderWidth: 1,
        borderColor: '#DEDEDE',
    },
    inputText: {
        fontFamily: "Avenir",
        fontSize: 15,
        width: '100%',
        height: '7%',
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0.26,
        borderRadius: 5,
        color: "#000000",

    },
    logoIcon: {
        width: 110,//'32%',
        height: 80,//'14%',
        position: 'absolute',
        top: 0,
        right: 0
    },
    signinButton: {
        width: '60%',
        height: '6%',
        borderRadius: 24.5,
        backgroundColor: "#f7941d"
    },
});








