const express = require("express");
const app = express();

const multer = require("multer");
let formHandler = multer();


const authController = require("../controllers/auth.controller")
let authCtrl = new authController();



app.post("/login",formHandler.none() ,authCtrl.login);
app.post('/register', formHandler.none() ,authCtrl.register)

module.exports = app;