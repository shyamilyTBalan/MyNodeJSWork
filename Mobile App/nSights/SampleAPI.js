

// export default class SampleAPI {
//   static authenticateUser(username, password) {
//     return fetch('http://18.220.45.11/api/auth/login', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         user_name: username,
//         password: password
//       })
//     }).then((response) => {
//       //console.log(response, "******")
//       return response.json();
//     }).catch((error) => {
//       console.log(error, "eeeeeeee");
//     });


//   }

//   static getAllKudos()
//   {
//     return fetch('http://18.220.45.11/api/auth/login', {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         is_private: 0,
//         user_id: 1
//       })
//     }).then((response) => {
//   //    console.log(response, "******")
//       return response.json();
//     }).catch((error) => {
//       console.log(error, "eeeeeeee");
//     });
//   }
// }



import {AsyncStorage} from'react-native';
import remote from '../nSights/src/Remote' 
export default class SampleAPI {
   authenticateUser(username, password) {
    console.log(username,"ffff")
    // return fetch('http://18.220.45.11/api/auth/login', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     user_name: username,
    //     password: password
    //   })
    // }).then((response) => {
    //   //console.log(response, "******")
    //   return response.json();
    // }).catch((error) => {
    //   console.log(error, "eeeeeeee");
    // });
   
   return new remote().fetchJSON('api/auth/login','POST',{user_name: username, password: password})
  }

  static getAllKudos()
  { 

    return fetch('http://18.220.45.11/api/auth/login', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        is_private: 0,
        user_id: 1,
      
      })
    }).then((response) => {
  //    console.log(response, "******")
      return response.json();
    }).catch((error) => {
      console.log(error, "eeeeeeee");
    });
  }
}
