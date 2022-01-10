const router = require("express").Router();
const {createUser, loginUser, loginWithGoogle}=require("../controllers/registerUser");
const {checkGoogleToken}=require("../auth/googleTokenValidation");
router.post("/register",createUser);
router.post("/loginWithGoogle",checkGoogleToken, loginWithGoogle);
router.post("/login", loginUser);
router.post("/oauthLogin", (req,res)=>{
   const body=req.body.code
   res.json({
       status:1,
       data:body
   })
});

module.exports=router;