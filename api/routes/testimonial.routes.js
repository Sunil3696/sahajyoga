const express = require("express");

const app = express();


const multer = require("multer");
let formHandler = multer();
const upload = require("../middleware/uploader.middleware");
const isLoggedIn = require("../middleware/isLoggedin.middleware");


const TestimonialController = require("../controllers/testimonial.controller");
const TestimonialCtrl = new TestimonialController();



app.post("/create", isLoggedIn, upload.array('image'), TestimonialCtrl.create);
app.put('/edit/:id', isLoggedIn, upload.array('image'), TestimonialCtrl.editTestimonials);


app.get('/:id', isLoggedIn, TestimonialCtrl.getTestimonialById);

app.get("/", TestimonialCtrl.getAllTestimonials);
app.delete('/del/:id', isLoggedIn, TestimonialCtrl.deleteTestimonial);







module.exports = app;