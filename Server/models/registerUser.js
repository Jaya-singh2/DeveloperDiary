const pool = require("../config/database.js");

module.exports ={
    create: (data,callback)=>{
        pool.query(
            `insert into registerUser (fullname, email, password) values(?,?,?)`
        ,
        [
            data.fullname,
            data.email,
            data.password
        ]
        ,
        (error, result, fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,result)
        });
    },
    getUserByEmail:(body,callback)=>{
        pool.query(`select * from registeruser where email=?`
        ,
        [body.email]
        ,
        (error,result,fields)=>{
            if(error){
                return callback(error);
            }
            return callback(null,result)
        });
    }
}