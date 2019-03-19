/* global fetch FormData localStorage */
//import "whatwg-fetch";
import React, { Component } from 'react';
export default class Remote  extends Component {
 

  constructor(baseUrl) {
    super();
    this.fetchJSON = this.fetchJSON.bind(this);   
    this.baseUrl = baseUrl||"http://18.220.45.11" ;
  
  }

   fetchJSON (endpoint,method,body){  
    return fetch(this.baseUrl+'/'+endpoint, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }).then((response) => {    
      return response.json();
    }).catch((error) => {
      console.log(error);
    });

  }

}



