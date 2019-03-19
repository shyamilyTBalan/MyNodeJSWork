import { AsyncStorage } from 'react-native';
import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import SampleAPI from '../SampleAPI';
import 'isomorphic-fetch';
import Adapter from "enzyme-adapter-react-16";
const fetch = require('node-fetch')

Enzyme.configure({ adapter: new Adapter() });

const getProfileOutput = [{
    "data": {
        "Id": 1,
        "statusID": 1,
        "message": "Success",
        "Name": "Ted Mosby",
        "Profession": "EMT - Basic",
        "Experience": "5 years",
        "Sent": 45,
        "Received": 23,
        "Profile_pic": ""
    }
}]

const getNotificationOutput = [{
    "data": {
        "statusID": 1,
        "message": "Success",
        "NotificationData": [
            {
                "img": "require(../../../assets/images/userpic1.png)",
                "Name": "Ted Mosby",
                "Type": "liked",
                "Time": "21 min ago",
                "Content": ""
            },
            {
                "img": "require(../../../assets/images/bitmap1.png)",
                "Name": "Kate Black",
                "Type": "liked",
                "Time": "31 min ago",
                "Content": ""
            }
        ]
    }
}]

const getAllAchievementsOutput = [{
    "data": {
        "Id": 1,
        "statusID": 1,
        "HoursWorked": "14,400",
        "MostCalls": 20,
        "TotalMiles": "75,000",
        "Shifts": 600,
        "TotalMVC": 300,
        "Morphine": 1200
    }
}]

const getUserRatingsOutput = [{
    "data": {
        "Id": 1,
        "statusID": 1,
        "Professionalism": 4,
        "PatientCare": 3,
        "TeamWork": 5,
        "Attitude": 5,
        "Leadership": 3
    }
}]

const getBookmarkedQuotesOutput = [{
    "data": {
        "statusID": 1,
        "message": "Success",
        "BookmarkData": [
            {
                "Date": "19 December 2018",
                "Content": "Its so easy to be kind - you only need to \r\n imagine yourself in the place of another person before you \r\nstart judging him",
                "Author": "Marlene Dietrich",
                "Lifespan": "1901 - 1992"
            },
            {
                "Date": "20 January 2019",
                "Content": "Its so easy to be kind - you only need to \r\n imagine yourself in the place of another person before \r\n you start judging him",
                "Author": "Marlene Dietrich",
                "Lifespan": "1901 - 1992"
            }
        ]
    }
}]

describe("Profile component", () => {

    const obj = new SampleAPI();
    it('getProfile() Checking', async function () {
        // const response = await obj.getProfile(1,getToken.token);
        const response = await obj.getProfile(1);       
        // expect(response.message).toBe("authenticated");
        expect(response).toBe(getProfileOutput);
    });

    it('getNotifications() Checking', async function () {
        const response = await obj.getNotifications(1);      
        expect(response).toBe(getNotificationOutput);
    });

    it('getAllAchievements() Checking', async function () {
        const response = await obj.getAllAchievements(1);     
        expect(response).toBe(getAllAchievementsOutput);
    });

    it('getUserRatings() Checking', async function () {
        const response = await obj.getUserRatings(1);      
        expect(response).toBe(getUserRatingsOutput);
    });

    it('getBookmarkedQuotes() Checking', async function () {
        const response = await obj.getBookmarkedQuotes(1);       
        expect(response).toBe(getBookmarkedQuotesOutput);
    });
})
