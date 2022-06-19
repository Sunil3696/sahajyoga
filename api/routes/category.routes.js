const express = require("express");
const app = express();


const isLoggedIn = require("../middleware/isLoggedin.middleware");
const multer = require("multer");
let formHandle = new multer;

const CategoryController = require("../controllers/category.controller");
const CategoryCtrl = new CategoryController();




app.post('/create', isLoggedIn, formHandle.none(), CategoryCtrl.create);
app.get('/one', CategoryCtrl.getOne);
app.get('/', CategoryCtrl.getAllCategory);
app.delete("/del/:id", isLoggedIn, CategoryCtrl.deleteCategory);
app.put("/edit/:id", isLoggedIn, formHandle.none(), CategoryCtrl.editCategory);
app.get("/:id", formHandle.none(), CategoryCtrl.getCategoryById);


module.exports = app;