import { AsyncStorage } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../src/Login/components/Login';
import Enzyme, { shallow, mount } from "enzyme";
import SampleAPI from '../SampleAPI';
import 'isomorphic-fetch';
import Adapter from "enzyme-adapter-react-16";
const fetch = require('node-fetch')

Enzyme.configure({ adapter: new Adapter() });
const gaveMostFeedbackOutput = [{
    "data": {
        "statusID": 1,
        "message": "Success",
        "data": [
            {
                "img": "ann",
                "rank": 1,
                "name": "Ann Davis",
                "note": "EMT-Basic",
                "number": 45
            },
            {
                "img": "john",
                "rank": 2,
                "name": "John Harris",
                "note": "Critical Care Paramedic",
                "number": 42
            }
        ]
    }
}]

const gotMostFeedbackOutput = [{
    "data": {
        "statusID": 1,
        "message": "Success",
        "data": [
            {
                "img": "ann",
                "rank": 1,
                "name": "Ann Davis",
                "note": "EMT-Basic",
                "number": 45
            },
            {
                "img": "john",
                "rank": 2,
                "name": "John Harris",
                "note": "Critical Care Paramedic",
                "number": 42
            }
        ]
    }
}]

const gaveMostKudosOutput = [{
    "data": {
        "statusID": 1,
        "message": "Success",
        "data": [
            {
                "img": "ann",
                "rank": 1,
                "name": "Ann Davis",
                "note": "EMT-Basic",
                "number": 45
            },
            {
                "img": "john",
                "rank": 2,
                "name": "John Harris",
                "note": "Critical Care Paramedic",
                "number": 42
            }
        ]
    }
}]

const gotMostKudosOutput = [{
    "data": {
        "statusID": 1,
        "message": "Success",
        "data": [
            {
                "img": "ann",
                "rank": 1,
                "name": "Ann Davis",
                "note": "EMT-Basic",
                "number": 45
            },
            {
                "img": "john",
                "rank": 2,
                "name": "John Harris",
                "note": "Critical Care Paramedic",
                "number": 42
            }
        ]
    }
}]

describe("LeaderBoard component", () => {

    const obj = new SampleAPI();
    it('gaveMostFeedback() Checking', async function () {
        const response = await obj.gaveMostFeedback();        
        expect(response).toBe(gaveMostFeedbackOutput);
    });

    it('gotMostFeedback() Checking', async function () {
        const response = await obj.gotMostFeedback();      
        expect(response).toBe(gotMostFeedbackOutput);
    });

    it('gaveMostKudos() Checking', async function () {
        const response = await obj.gaveMostKudos();       
        expect(response).toBe(gaveMostKudosOutput);
    });

    it('gotMostKudos() Checking', async function () {
        const response = await obj.gotMostKudos();      
        expect(response).toBe(gotMostKudosOutput);
    });

    it('getRankingPosition() Checking', async function () {
        const response = await obj.getRankingPosition(1);      
        expect(response).toBe(getRankingPositionOutput);
    });

})

