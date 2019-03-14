
const promise = require('promise')

import 'react-native';
import React from'react';
import Home from '../src/Home/components/Home';
import SampleAPI from '../SampleAPI';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
//import { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import 'isomorphic-fetch';


const getAllKudos_output =[{
	"data": {

		"statusID": 1,
		"message": "Successfuly Return",
		"posts": [
		  {
				"Id": 1,
				"Ownername": "Ted Mosby",
				"targetuser": null,
				"content": "Very interesting and useful",
				"datetime": "6h ago",
				"likes": 23,
				"comments": 5,
				"ImageUrl": "require('../../../assets/images/ImagePost.png')",
				"comment_data": [{
						"id": 1,
						"description": "cool",
						"parent_post_id": 1,
						"parent_comment_id": null,
						"owner_id": 1

					},		{
						"id": 2,
						"description": "good",
						"parent_post_id": 1,
						"parent_comment_id": null,
						"owner_id": 1,

						"sub_comments": [{
							"id": 1,
							"description": "cool",
							"parent_post_id": 1,
							"parent_comment_id": 2,
							"owner_id": 1

						}]
					}
				]},		{
				"Id": 2,
				"Ownername": "Kate Black",
				"targetuser": "Nick Brown",
				"content": "I noticed how kind you were to that frustrated nurse.  It was clear your kindness made her feel better.",
				"datetime": "8h ago",
				"likes": 16,
				"comments": 6,
				"ImageUrl":4
			},{
				"Id": 3,
				"Ownername": "Nina Grek",
				"targetuser": "Ted Mosby",
				"content": "Thank you for covering my shift with such late notice.  I was able to help my family when an emergency arose.",
				"datetime": "6h ago",
				"likes": 20,
				"comments": 4,
				"ImageUrl": null
			},{
				"Id": 4,
				"Ownername": "John Harris",
				"targetuser": "Nina Grek",
				"content": "thanks for leaving such a great unit this morning!  It&apos;s nice to start my day with a clean, stocked unit",
				"datetime":"6h ago",
				"likes": 22,
				"comments": 7,
				"ImageUrl": null
			}	
			]
	}
}]
const postKudos_output = [{
		"data": {
		  "statusID": 1,
		  "id": 1,
		  "message": "Successfully Posted"
		}
 }]
const checkToDeleteOrMute_output = [{
		"data": {
		  "message": "Delete"
		}
 }]
const addPostComment_output = [{
		"data": {
		  "Id": 1,
		  "statusID": 1,
		  "message": "Successfully Posted"
		}  
 }]
const addPostLikes_output = [{ 
	  "data": {   
		"statusID": 1,
		"message": "Successfully Liked"
	  }
}]
const getAllReportReason_output = [{
		"data": {
		  "statusID": 1,
		  "message": "Successfuly Return",
		  "data1": [
			{
			  "id": 1,
			  "Content": "I’m not interested in this post"
			},
			{
			  "id": 2,
			  "Content": "It’s suspicious or spam"
			},
			{
			  "id": 3,
			  "Content": "It displays a sensitive image"
			},
			{
			  "id": 4,
			  "Content": "It’s abusive or harmful"
			}
		  ]
		}
 }]
const deleteOrReportPost_output = [{
		"data": {
		  "statusID": 1,
		  "message": "Success"
		}
 }]


const obj = new SampleAPI();
 
 //getAllKudos   
test('getallkudos',async function() {
    const response = await obj.getAllKudos();
  console.warn(response);
  expect(response).toBe(getAllKudos_output);
	//expect(response).resolves.toEqual(getAllKudos_output);
  //expect(response).reject.toEqual(SampleAPI.getAllKudos_failoutput);
})
 
//postKudos
test('postkudos',async function() {
    const response = await obj.postKudos();
    console.warn(response);
     expect(response).toBe(postKudos_output);
     
})

//check To Delete Or Mute
test('checkToDeleteOrMute',async function() {
    const response = await obj.checkToDeleteOrMute();
    console.warn(response);
     expect(response).toBe(checkToDeleteOrMute_output);
     
})

//addPostComment
test('addPostComment',async function() {
    const response = await obj.addPostComment();
    console.warn(response);
     expect(response).toBe(addPostComment_output);
     
})

 //addPostLikes
 test('addPostLikes',async function() {
    const response = await obj.addPostLikes();
    console.warn(response);
     expect(response).toBe(addPostLikes_output);
     
})

//getAllReportReason
test('getAllReportReason',async function() {
    const response = await obj.getAllReportReason();
    console.warn(response);
     expect(response).toBe(getAllReportReason_output);
     
})

//delete/reportPost
test('deleteOrReportPost',async function() {
    const response = await obj.deleteOrReportPost();
    console.warn(response);
     expect(response).toBe(deleteOrReportPost_output);
     
})

























/*import {AsyncStorage} from'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../src/Login/components/Login';
import Enzyme, { shallow, mount } from "enzyme";
import SampleAPI from '../SampleAPI';
import 'isomorphic-fetch';
import Adapter from "enzyme-adapter-react-16";
const fetch = require('node-fetch')

Enzyme.configure({ adapter: new Adapter() });
var item =async()=>{}

var retrieveItem = async(key)=> {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key);
      const item = JSON.parse(retrievedItem);
      return item;
    } catch (error) {
      console.log(error.message);
    }
    return
  }
describe("Home ", () => {

    it('Get all kudos', async function () {
        const obj = new SampleAPI();

       var token_received =  retrieveItem('1');
       console.log("token_received");
       console.log(token_received);
     

       //
       let user = JSON.parse(sessionStorage.getItem('1'));
       console.log("user token")
       console.log(user)
       const token = user.data.id;
       //
        const response = await obj.getAllKudos(0,1);
        console.log(response);
        expect(response.message).toBe("Not");
      //  expect(response.message).toBe("Not found!");
    });


   
     
})*/
