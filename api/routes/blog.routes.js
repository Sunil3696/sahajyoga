const express = require("express");
const app = express();

let BlogController = require("../controllers/blog.controller");
const isLoggedIn = require("../middleware/isLoggedin.middleware");
const upload = require("../middleware/uploader.middleware");
let BlogCtrl = new BlogController();

const multer = require("multer");
let formHandle = new multer;

app.post('/create', isLoggedIn, upload.fields([{ name: 'image', maxCount: 1 }, { name: 'carousel', maxCount: 20 }]), BlogCtrl.create);
app.delete('/del/:id', isLoggedIn, BlogCtrl.deleteBlog);
app.get('/FE', BlogCtrl.getBlogForFe)
app.get('/popularblog', BlogCtrl.getPopularBlogs);
app.get('/:id', BlogCtrl.getBlogbyId);
app.get('/', BlogCtrl.getAllBlog);
app.put('/edit/:id', isLoggedIn, upload.fields([{ name: 'image', maxCount: 1 }, { name: 'carousel', maxCount: 20 }]), BlogCtrl.editBlog);
app.put('/updateView/:id', formHandle.none(), BlogCtrl.updateView )
module.exports = app;

