
import {AsyncStorage} from'react-native';
import sessionStorage from 'react-native'
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../src/Login/components/Login';
import Enzyme, { shallow, mount } from "enzyme";
import SampleAPI from '../SampleAPI';
import 'isomorphic-fetch';
import Adapter from "enzyme-adapter-react-16";
const fetch = require('node-fetch')

Enzyme.configure({ adapter: new Adapter() });
it('When Username and password is correct', async function () {
  const obj = new SampleAPI();
  const response = await obj.authenticateUser("admin", "admin");
 //  console.warn(response);
  // AsyncStorage.setItem('name',  JSON.stringify(response.token));
  expect(response.message).toBe("authenticated");
});







/*import {AsyncStorage} from'react-native';
import sessionStorage from 'react-native'
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../src/Login/components/Login';
import Enzyme, { shallow, mount } from "enzyme";
import SampleAPI from '../SampleAPI';
import 'isomorphic-fetch';
import Adapter from "enzyme-adapter-react-16";
const fetch = require('node-fetch')

Enzyme.configure({ adapter: new Adapter() });

  var storeItem = async(key, item)=> {
    try {
          var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
           console.log("inside store item")
           console.log(jsonOfItem)
        return jsonOfItem;
    } catch (error) {
      console.log(error.message);
    }
  }

describe("Login component", () => {    
    it('When Username and password is correct', async function () {
        const obj = new SampleAPI();
        const response = await obj.authenticateUser("admin", "admin");
        console.warn(response);
       //var tokengenerated = await storeItem(1,response.token);
       try {
        var tokengenerated = await AsyncStorage.setItem(response.message,response.token);
      } catch (error) {
        console.log(error.message);
      }
        console.log("token generated")
        console.log(tokengenerated)
     // sessionStorage.setItem("1","token1");
        expect(response.message).toBe("authenticated");
    });
})*/
