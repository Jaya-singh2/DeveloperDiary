const {genSaltSync, hashSync, compareSync}=require("bcrypt")
const {create, getUserByEmail} = require("../models/registerUser");
const {sign} =require("jsonwebtoken");
module.exports={
    createUser:(req,res)=>{
        const body=req.body;
        const salt = genSaltSync(10);
        console.log(body,salt)
        body.password=hashSync(body.password,salt)
        create(body,(error,results)=>{
            if(error)
            {
                return res.status(500).json({
                    success:0,
                    message:`Database ${error}`
                })
            }
            return res.status(200).json({
                success:1,
                data:results,
                message:"register successfully"
            })
        })
    },
    loginUser:(req,res)=>{
        const body=req.body;
        getUserByEmail(body,(error,results)=>{
            if(error)
            {
               return res.status(500).json({
                    success:0,
                    message:`Database ${error}`
                })
            }
            /* in case there is no results */
            if(!results || results.length===0)
            {
                return res.status(401).json({
                    success:0,
                    message:"invalid email or password"
                })
            }
            console.log(results)
            const passwordIsCorrect=compareSync(body.password, results[0].password)
            if(passwordIsCorrect)
            {
                results.password=undefined;
                const jsontoken=sign({userId:results[0].id},process.env.TOKEN_KEY,{
                    expiresIn:"48h"
                })
                return res.status(200).json({
                    success:1,
                    data:"login successfully",
                    token:jsontoken
                });
            }
            else
            {
                return res.status(401).json({
                    success:1,
                    message:"Password is wrong"
                });
            }

        })      
    },
    loginWithGoogle:(req,res)=>{
        return res.status(200).json({
            success:1,
            data:res.body,
        })      
    }
}