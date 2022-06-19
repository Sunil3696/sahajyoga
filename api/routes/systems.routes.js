const express = require("express");
const app = express();

const SystemsController = require("../controllers/systems.controller");
const isLoggedIn = require("../middleware/isLoggedin.middleware");
const upload = require("../middleware/uploader.middleware");
const SysCtrl = new SystemsController();
const multer = require("multer");
let formHandler = multer();

app.post('/create', isLoggedIn, upload.fields([{ name: 'thumb_image', maxCount: 1 }, { name: 'banner_image', maxCount: 1 }, { name: 'images', maxCount: 50 }]), SysCtrl.create);
app.get('/fe', SysCtrl.getAllSystemFe)
app.get('/:id', SysCtrl.getSystemById);
app.delete('/del/:id', isLoggedIn, SysCtrl.deleteSystem);
app.put('/edit/:id', upload.fields([{ name: 'thumb_image', maxCount: 1 }, { name: 'banner_image', maxCount: 1 }, { name: 'images', maxCount: 50 }]), SysCtrl.editSystem);
app.get('/', SysCtrl.getAllSystem);
module.exports = app;