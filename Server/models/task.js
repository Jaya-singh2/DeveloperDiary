const pool=require("../config/database.js");

module.exports={
    createTask:(body,callback)=>{
        pool.query(`insert into usertask (userId,description, startDateTime, endDateTime, duration, priority, createdOn) value(?,?,?,?,?,?,?)`
        ,
        [
            body.userId,
            body.description,
            body.startDateTime,
            body.endDateTime,
            body.duration,
            body.priority,
            body.createdOn
        ]
        ,
        (error,result,fields)=>{
            if(error)
            {
               return callback(error);
            }
            return callback(null,result);
        });
    },
    getTotalRow:(body,callback)=>{
        pool.query(`select count(*) as 'total' from usertask where userId=?`,[body.userId],(error,result,fields)=>{
            if(error)
            {
               return callback(error)
            }
            return callback(null,result)
        })
    },
    getAllTasks:(body,startLimit,endLimit,callback)=>{
        pool.query(`select * from usertask where userId=? limit ?,?`,[body.userId,startLimit,endLimit],(error,result,fields)=>{
            if(error)
            {
               return callback(error)
            }
            return callback(null,result)
        })
    },
    getTaskById:(body,taskId,callback)=>{
        pool.query(`select * from usertask where id=? and userId=?`,[taskId,body.userId],(error,result,fields)=>{
            if(error)
            {
               return callback(error)
            }
            return callback(null,result)
        });
    },
    deleteTaskById:(body,taskId,callback)=>{
        pool.query(`delete from usertask where id=? and userId=?`,[taskId,body.userId],(error,result,fields)=>{
            if(error)
            {
               return callback(error)
            }
            return callback(null,result)
        });
    },
    updateTaskById:(body,taskId,callback)=>{
        pool.query(`update usertask set description=?, startDateTime=?, endDateTime=?, duration=?, priority=? where id=? and userId=?`
        ,
        [
            body.description,
            body.startDateTime,
            body.endDateTime,
            body.duration,
            body.priority,
            taskId,
            body.userId
        ]
        ,
        (error,result,fields)=>{
            if(error)
            {
               return callback(error)
            }
            return callback(null,result)
        });
    },
}