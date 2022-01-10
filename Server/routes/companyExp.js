const router = require("express").Router();
const {checkToken}= require("../auth/tokenValidation.js");
const {addExp,getExps,getExp,updateExp,deleteExp}=require("../controllers/companyExp.js")

router.post("/addExperiance",checkToken,addExp);
router.get("/getAllExperiance",checkToken,getExps);
router.get("/getExperianceById/:id",checkToken,getExp);
router.put("/updateExperianceById/:id",checkToken,updateExp);
router.delete("/deleteExperianceById/:id",checkToken,deleteExp);
module.exports=router;