const jwt = require('jsonwebtoken');
var util = require('util')
const mysql = require('mysql');
export const login = async (req, res) => {

    const user_id = req.params.id;
    const username = req.body.username;
    const password = req.body.password;
    return new Promise(function (resolve, reject) {
        // Do async job
       /* con.query("SELECT username,password FROM user WHERE user_id = '" + user_id + "'", function (error, results, fields) {
            if (error) {
                reject(error);
            }
            else {
                if ((results.length > 0) && (results[0].password == password) && (results[0].username == username)) {
                    jwt.sign({ user_id }, 'SuperSecRetKey', { expiresIn: 60 * 60 }, (err, token) => {
                        console.log(token);
                        resolve(token)
                    })
                }
                else
                    resolve("invalid username or password..try again")
            }
        })*/

    })
};
