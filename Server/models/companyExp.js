const pool =require("../config/database");

module.exports={
    createExp:(body,callback)=>{
        pool.query(`insert into companyExp (companyName, city, state, email, designation, salary, technology, expYear, award, numOfProject, userId) values(?,?,?,?,?,?,?,?,?,?,?)`
        ,
        [
            body.name,
            body.city,
            body.state,
            body.email,
            body.designation,
            body.salary,
            body.technology,
            body.expYear,
            body.award,
            body.numOfProject,
            body.userId
        ]
        ,
        (error,result,fields)=>{
            if(error)
            {
                return callback(error)
            }
            return callback(null,result)
        }
        )
    },
    getAllExp:(body,callback)=>{
        pool.query(`select * from companyExp where userId=?`,[body.userId],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error)
            }
            return callback(null,result)
        });
    },
    getExpById:(expId,body,callback)=>{
        pool.query(`select * from companyExp where userId=? and id=?`,[body.userId,expId],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error)
            }
            return callback(null,result)
        });
    },
    updateExpById:(expId,body,callback)=>{
        pool.query(`update companyExp set companyName=?, city=?, state=?, email=?, designation=?, salary=?, technology=?, expYear=?, award=?, numOfProject=? where userId=? and id=?`
        ,
        [
            body.name,
            body.city,
            body.state,
            body.email,
            body.designation,
            body.salary,
            body.technology,
            body.expYear,
            body.award,
            body.numOfProject,  
            body.userId,
            expId
        ],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error)
            }
            return callback(null,result)
        });
    },
    deleteExpById:(expId,body,callback)=>{
        pool.query(`delete from companyExp where userId=? and id=?`,[body.userId,expId],
        (error,result,fields)=>{
            if(error)
            {
                return callback(error)
            }
            return callback(null,result)
        });
    }
}