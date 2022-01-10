const {createExp,getAllExp,getExpById,updateExpById,deleteExpById}=require("../models/companyExp")
module.exports={
    addExp:(req,res)=>{
        const body= req.body;
        createExp(body,(error,results)=>{
            if(error)
            {
             return res.status(500).json({
                    success:0,
                    message:`Database ${error}`
                })
            }
            return res.status(200).json({
                succes:1,
                message:"company experiance created"
            })
        })
    },
    getExps:(req,res)=>{
        const body= req.body;
        getAllExp(body,(error,results)=>{
            if(error)
            {
             return res.status(500).json({
                    success:0,
                    message:`Database ${error}`
                })
            }
            return res.status(200).json({
                succes:1,
                data:results
            })
        })
    },
    getExp:(req,res)=>{
        const body= req.body;
        const expId=req.params.id
        getExpById(expId,body,(error,results)=>{
            if(error)
            {
             return res.status(500).json({
                    success:0,
                    message:`Database ${error}`
                })
            }
            return res.status(200).json({
                succes:1,
                message:results
            })
        })
    },
    updateExp:(req,res)=>{
        const body= req.body;
        const expId=req.params.id
       updateExpById(expId,body,(error,results)=>{
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
                    message:"failed to update"
                })
            }
            return res.status(200).json({
                succes:1,
                message:"company experiance successfully updated"
            })
        })
    },
    deleteExp:(req,res)=>{
        const body= req.body;
        const expId=req.params.id
       deleteExpById(expId,body,(error,results)=>{
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
                succes:1,
                message:"company experiance successfully deleted"
            })
        })
    }
}