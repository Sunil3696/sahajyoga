const express = require("express");
const app = express();

const BiographyController = require("../controllers/biography.controller");
const isLoggedIn = require("../middleware/isLoggedin.middleware");
const upload = require("../middleware/uploader.middleware");
const BioCtrl = new BiographyController();

app.post("/create", isLoggedIn, upload.fields([{ name: 'main_images', maxCount: 3 }, { name: 'desc_images', maxCount: 30 }]), BioCtrl.create);
app.get('/one', BioCtrl.getOneBio);
app.get('/:id', BioCtrl.getBioById);
app.get('/', BioCtrl.getAllBio);
app.delete('/del/:id', isLoggedIn, BioCtrl.deleteBio);
app.put('/edit/:id', isLoggedIn, upload.fields([{ name: 'main_images', maxCount: 3 }, { name: 'desc_images', maxCount: 30 }]), BioCtrl.editBio);
module.exports = app;