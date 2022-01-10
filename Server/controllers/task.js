const {createTask,getAllTasks,getTaskById,deleteTaskById,updateTaskById,getTotalRow}=require("../models/task.js")
module.exports ={
    addTask:(req,res)=>{
        const body=req.body;
        const dateNow=new Date();
        body.createdOn=dateNow;
        createTask(body,(error,results)=>{
            if(error)
            {
               return res.status(500).json({
                    success:0,
                    message:`Database ${error}`
                })
            }
            if(!results)
            {
                return res.status(404).json({
                    success:0,
                    message:"failed to create task"
                })
            }
            return res.status(200).json({
                success:1,
                data:results,
                message:"Task successfully created"
            })

        })
    },
    getTaskRecord:(req,res)=>{
        const body=req.body;
        getTotalRow(body,(error,results)=>{
            if(error)
            {
                return res.status(500).json({
                    success:0,
                    message:`Database ${error}`
                })
            }
            return res.status(200).json({
                success:1,
                numOfRecord:results[0].total,
                numOfPage:Math.ceil(results[0].total/20)
            })
        })
    }
    ,
    getTasks:(req,res)=>{
        const body=req.body;
        const pageNumber=parseInt(req.query.pageNumber);
        const dataLimit=20;
        const startLimit=(pageNumber-1)*dataLimit;
        const endLimit=pageNumber*dataLimit;
        if(pageNumber<1)
        {
            return res.status(500).json({
                success:1,
                message:"data not found invalid page",
                data:[]
            })
        }
        getAllTasks(body,startLimit,endLimit,(error,results)=>{
            if(error)
            {
                return res.status(500).json({
                    success:0,
                    message:`Database ${error}`
                })
            }
            if(results.length===0)
            {
                return res.status(404).json({
                    success:1,
                    message:"data not found",
                    data:results
                })
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        })
    },
   getTask:(req,res)=>{
       const body=req.body;
       const taskId=req.params.id
        getTaskById(body,taskId,(error,results)=>{
            if(error)
            {
                return res.status(500).json({
                    success:0,
                    message:`Database ${error}`
                })
            }
            return res.status(200).json({
                success:1,
                message:results
            })
        })

    },
   deleteTask:(req,res)=>{
       const body=req.body;
       const taskId=req.params.id
        deleteTaskById(body,taskId,(error,results)=>{
            if(error)
            {
                return res.status(500).json({
                    success:0,
                    message:`Database ${error}`
                })
            }
            if(!results)
            {
                return res.status(500).json({
                    success:0,
                    message:"failed to delete"
                })
            }
            return res.status(200).json({
                success:1,
                message:"Task deleted successfully"
            })
        })
    },
    updateTask:(req,res)=>{
        const body=req.body;
        const taskId=req.params.id;
        updateTaskById(body,taskId,(error,results)=>{
            if(error)
            {
                return res.status(500).json({
                    success:0,
                    message:`Database ${error}`
                })
            }
            if(!results)
            {
                return res.status(500).json({
                    success:0,
                    message:"failed to delete"
                })
            }
            return res.status(200).json({
                success:1,
                message:"Task updated successfully"
            })
        })
    }
}