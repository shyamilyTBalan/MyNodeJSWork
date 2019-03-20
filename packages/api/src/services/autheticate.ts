var util = require('util')
const mysql = require('mysql');
export const auth = async(req, res) => {

    const user_id = req.body.user_id;
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    console.log(user_id)

    return new Promise(function (resolve, reject) {
        // Do async job

      /*  var sql = "INSERT INTO user (user_id,username,password,name,salt) VALUES("
        + user_id + ",'" + username + "', crypt('" +password+"',gen_salt('bf'+8)),'"+ name + "',gen_salt('bf'+8))";

        console.log(sql);
        con.query(sql, function (error, results, fields) {
            if (error) {
                reject(error);
            }
            else
                resolve("inserted")
        })*/
    })
}





























/*con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    console.log(JSON.stringify(result))
  });*/
/*con.query("update customers set name ='systalent' where name = 'Company Inc'", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});
con.query("delete from  customers where name ='systalent'", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});*/