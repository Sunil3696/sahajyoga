const express = require("express");
const app = express();


const FeedBackController = require("../controllers/feedback.controller");
const FeedCtrl = new FeedBackController();


const multer = require("multer");
let formHandle = new multer;

app.post('/create', formHandle.none(), FeedCtrl.create);


module.exports = app;