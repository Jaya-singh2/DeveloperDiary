const express = require("express");
var cors = require('cors')
require("dotenv").config();
const taskRoute = require("./routes/task");
const registerRoute= require("./routes/registerUser")
const companyExpRoute=require("./routes/companyExp");

const app = express();
app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use("/task",taskRoute);
app.use("/company",companyExpRoute);
app.use("/",registerRoute);

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`server is running on port: ${process.env.SERVER_PORT}`)
})