const {verify}=require("jsonwebtoken");

module.exports={
    checkToken: (req,res,next)=>{
        let token = req.get("authorization");
        if(token){
            token=token.slice(7);
            var dateNow = new Date();
            verify(token,process.env.TOKEN_KEY,(err, decodedToken)=>{
                if(err)
                {
                    res.status(401).json({
                        success:0,
                        message:"invalid token",
                    })
                }
                else if(decodedToken.exp < dateNow.getTime()/1000){
                    res.status(401).json({
                        success:0,
                        expired:true,
                        message:"token is expired",
                    })
                }
                else
                {
                   req.body.userId=decodedToken.userId;
                   res.header("Access-Control-Allow-Origin", "*");
                   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
                   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
                   next();
                }
            })
        }
        else
        {
            res.status(401).json({
                success:0,
                message:"access denied unauthorized user"
            })
        }
    }
}