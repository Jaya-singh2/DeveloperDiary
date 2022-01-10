const router = require("express").Router();
const {checkToken} = require("../auth/tokenValidation.js");
const { addTask,getTasks,getTask,deleteTask,updateTask,getTaskRecord } = require("../controllers/task.js");

router.post("/addTask",checkToken,addTask)
router.get("/getAllTasks",checkToken,getTasks)
router.get("/getTaskRecord",checkToken,getTaskRecord)
router.get("/getTaskById/:id",checkToken,getTask)
router.delete("/deleteTaskById/:id",checkToken,deleteTask)
router.put("/updateTaskById/:id",checkToken,updateTask)
module.exports=router;