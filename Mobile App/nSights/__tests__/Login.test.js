import {AsyncStorage} from'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../src/Login/components/Login';
import Enzyme, { shallow, mount } from "enzyme";
import SampleAPI from '../SampleAPI';
import 'isomorphic-fetch';
import Adapter from "enzyme-adapter-react-16";
const fetch = require('node-fetch')

Enzyme.configure({ adapter: new Adapter() });

describe("Login component", () => {

    // it('Renders login components correctly', () => {
    //     const tree = renderer.create(<Login />).toJSON();
    //     const ModalWrapperComponent = shallow(<Login />).find('TextInput');
    //     //  expect(tree).toMatchSnapshot();
    //     // console.warn(ModalWrapperComponent.debug());
    //     expect(ModalWrapperComponent.at(0).props().testID).toEqual('username');
    //     expect(ModalWrapperComponent.at(1).props().testID).toEqual('password');
    // })

    it('When Username and password is correct', async function () {
        const obj = new SampleAPI();
        const response = await obj.authenticateUser("admin", "admin");
         console.warn(response);
       //  AsyncStorage.setItem('Login_token', response.token);
        expect(response.message).toBe("authenticated");
    });

    // it('When Username and password is wrong', async function () {
    //     const response = await SampleAPI.authenticateUser("admin", "admik");      
    //     expect(response.message).toBe("invalid_login");
    // });

    // it('Get all kudos', async function () {
    //     const response = await SampleAPI.getAllKudos();      
    //     expect(response).toBe("invalid_login");
    // });
})
