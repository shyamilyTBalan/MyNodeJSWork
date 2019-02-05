const express = require('express')
const app = express();
const mysql = require('mysql');
const jwt    = require('jsonwebtoken');
app.use(express.json())

let con = mysql.createConnection({
    host: "192.168.0.160",
    user: "shyamily",
    password: "davinci",
    database: "mydb"
})
////////////////////////////////////////////
app.post('/login',(req,res) => {
    let username = req.body.username
    let password = req.body.password
    console.log(username);
    let token =''
    let sql = 'SELECT * FROM user WHERE username = ? AND password = ?'
    con.query(sql,[username,password],(err,result) => {
    if (err) throw err;
    if(result.length != 0) {
        let userid = result[0].userId
        console.log(userid);
        token = jwt.sign({id:userid},'secret',{ expiresIn: '24h'})
        res.json({
        success: true,
        token: token
      })
    }
    else {
         res.sendStatus(401) 
    }   
  })
}) 
/////////////////////////////////////////////////
app.post('/users',(req,res) => {
    let name = req.body.name
    let username = req.body.username
    let password = req.body.password
    let userRole = req.body.role
    let decoded = jwt.verify(req.headers.token, 'secret')
    let id = decoded.id
    console.log(id)
    let sql = "SELECT COUNT(*) as count FROM id_table WHERE userId = '"+ id +"' AND roleId IN(100,102)"  // IN(100,102)"      //= 100 OR roleId = 102'
    con.query(sql,(err,result) => {
        if (err) throw err;
        //console.log(result[0].count)
        if(result[0].count > 0) {
            con.query("SELECT * FROM USER WHERE username = '"+ username +"' AND password = '"+ password +"'",(err,result) => {
                if(err) throw err
                if(result.length != 0) {
                    console.log("user already exist")
                    res.send('user already exist')
                }
                else {
                     // console.log(result)
                    let insert = {name:name, username:username,password:password}
                     con.query('INSERT INTO user SET ?',insert, function (err, result) {
                        if (err) throw err;
                        let userId = result.insertId
                        //  console.log(userId)
                         con.query("SELECT roleId FROM role WHERE role = '"+ userRole +"'",function (err, result) {
                            if (err) throw err;
                                 // console.log(result[0].roleId)
                                 let insertRole = {userId:userId,roleId:result[0].roleId}
                                 con.query('INSERT INTO id_table SET ?',insertRole, function (err, result) {
                                    if (err) throw err;
                                     console.log("record inserted")
                                  res.send('inserted')
                                 })  
                         })
                    })
                }
            })
          
         }
        else { res.sendStatus(401) }
       
    })
    
})
////////////////////////////////////////////////
app.get('/users',(req,res) => {
    let decoded = jwt.verify(req.headers.token, 'secret')
    let id = decoded.id
    let sql = "SELECT COUNT(*) as count FROM id_table WHERE userId = '"+ id +"' AND roleId IN(100,101,103,104)"
    con.query(sql,(err,result) => {
        if (err) throw err;
        if(result[0].count > 0) {
            con.query("SELECT * FROM user",(err,result) => {
                if (err) throw err;
                // console.log(result)
                res.send(result)
            })              
        }
        else { res.sendStatus(401) }
    })  
})
////////////////////////////////////////////////////////////
app.get('/users/:id',(req,res) => {
    let decoded = jwt.verify(req.headers.token, 'secret')
    let id = decoded.id
    let sql = "SELECT COUNT(*) as count FROM id_table WHERE userId = '"+ id +"' AND roleId IN(100,101,103,104)"
    con.query(sql,(err,result) => {
        if (err) throw err;
        if(result[0].count > 0) {
            let userId = req.params.id
            con.query("SELECT * FROM user WHERE userId = '"+ userId +"'",(err,result) => {
                if (err) throw err;
                // console.log(result)
                res.send(result)
            })              
        }
        else { res.sendStatus(401) }
    })  
})
////////////////////////////////////////////////////////////
app.patch('/users/:id',(req,res) => {
    let decoded = jwt.verify(req.headers.token, 'secret')
    let id = decoded.id
    //let 
    let sql = "SELECT COUNT(*) as count FROM id_table WHERE userId = '"+ id +"' AND roleId IN(100,103)"
    con.query(sql,(err,result) => {
        if (err) throw err;
        if(result[0].count > 0) {
            let name = req.body.newName
            let userId = req.params.id
            con.query("UPDATE user SET name = '"+ name +"' WHERE userId = '"+ userId +"'",(err,result) => {
                if (err) throw err;
                 console.log('updated')
                res.send('updated')
            })              
        }
        else { res.sendStatus(401) }
    })  
})
////////////////////////////////////////////////////////////
app.delete('/users/:id',(req,res) => {
    let decoded = jwt.verify(req.headers.token, 'secret')
    let id = decoded.id
    //let 
    let sql = "SELECT COUNT(*) as count FROM id_table WHERE userId = '"+ id +"' AND roleId IN(100,104)"
    con.query(sql,(err,result) => {
        if (err) throw err;
        if(result[0].count > 0) {
            let userId = req.params.id
            con.query("DELETE FROM id_table WHERE userId = '"+ userId +"'",(err,result) => {
                if (err) throw err;
                con.query("DELETE FROM user WHERE userId = '"+ userId +"'",(err,result) => {
                    if (err) throw err;
                     console.log('deleted')
                    res.send('deleted')
                })   
            })              
        }
        else { res.sendStatus(401) }
    })  
})
////////////////////////////////////////////////////////////
app.get('/roles',(req,res) => {
    let decoded = jwt.verify(req.headers.token, 'secret')
    let id = decoded.id
    let sql = "SELECT COUNT(*) as count FROM id_table WHERE userId = '"+ id +"' AND roleId IN(100,101,103,104)"
    con.query(sql,(err,result) => {
        if (err) throw err;
        if(result[0].count > 0) {
            con.query("SELECT * FROM role",(err,result) => {
                if (err) throw err;
                // console.log(result)
                res.send(result)
            })              
        }
        else { res.sendStatus(401) }
    })  
})
///////////////////////////////////////////////////////////////
app.get('/roles/:id',(req,res) => {
    let decoded = jwt.verify(req.headers.token, 'secret')
    let id = decoded.id
    let sql = "SELECT COUNT(*) as count FROM id_table WHERE userId = '"+ id +"' AND roleId IN(100,101,103,104)"
    con.query(sql,(err,result) => {
        if (err) throw err;
        if(result[0].count > 0) {
            let userId = req.params.id
            con.query("select i.userId,r.role from id_table i,role r where i.userId = '"+ userId+"' and i.roleId = r.roleId",(err,result) => {
                if (err) throw err;
                console.log(result)
                res.send(result)
            })              
        }
        else { res.sendStatus(401) }
    })  
})
///////////////////////////////////////////////////////////////
app.post('/roles',(req,res) => {
    let userId = req.body.id
    let userRole = req.body.newRole
    let decoded = jwt.verify(req.headers.token, 'secret')
    let id = decoded.id
    console.log(id)
    let sql = "SELECT COUNT(*) as count FROM id_table WHERE userId = '"+ id +"' AND roleId IN(100,102)"  // IN(100,102)"      //= 100 OR roleId = 102'
    con.query(sql,(err,result) => {
        if (err) throw err;
        //console.log(result[0].count)
        if(result[0].count > 0) {
           con.query("SELECT roleId FROM role WHERE role = '"+ userRole +"'",(err,result) => {
               if(err) throw err
               //console.log(result[0].roleId)
               let insert = {userId:userId,roleId:result[0].roleId}
               con.query('INSERT INTO id_table SET ?',insert, function (err, result) {
                   if (err) throw err;
                   console.log("role inserted")
                   res.send('role inserted')
               })
           })
            
        }
        else { res.sendStatus(401) }
       
    })
    
})
////////////////////////////////////////////////
app.patch('/roles/:id',(req,res) => {
    let decoded = jwt.verify(req.headers.token, 'secret')
    let id = decoded.id
    //let 
    let sql = "SELECT COUNT(*) as count FROM id_table WHERE userId = '"+ id +"' AND roleId IN(100,103)"
    con.query(sql,(err,result) => {
        if (err) throw err;
        if(result[0].count > 0) {
            let role = req.body.newRole
            let userId = req.params.id
            let oldRoleId = req.body.oldRoleId
            console.log(role)
            console.log(userId)
            console.log(oldRoleId)
            con.query("SELECT roleId FROM role WHERE role = '"+ role +"'",(err,result) => {
                if(err) throw err
                console.log(result[0].roleId)
                con.query("UPDATE id_table SET roleId = '"+ result[0].roleId +"' WHERE userId = '"+ userId +"' AND roleId = '"+ oldRoleId +"'",(err,result) => {
                    if (err) throw err;
                    console.log(result)
                     console.log('updated')
                    res.send('updated')
                })  
            })
                        
        }
        else { res.sendStatus(401) }
    })  
})
////////////////////////////////////////////////////////////
app.delete('/roles/:id',(req,res) => {
    let decoded = jwt.verify(req.headers.token, 'secret')
    let id = decoded.id
    //let 
    let sql = "SELECT COUNT(*) as count FROM id_table WHERE userId = '"+ id +"' AND roleId IN(100,104)"
    con.query(sql,(err,result) => {
        if (err) throw err;
        if(result[0].count > 0) {
            let userId = req.params.id
            con.query("DELETE FROM id_table WHERE userId = '"+ userId +"'",(err,result) => {
                if (err) throw err;
                console.log('deleted')
                res.send('deleted')
            })              
        }
        else { res.sendStatus(401) }
    })  
})
////////////////////////////////////////////////////////////
app.listen(8080,() => {
    console.log('server started.....')
})