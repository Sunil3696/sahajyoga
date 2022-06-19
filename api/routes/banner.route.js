const express = require("express");
const app = express();

const isLoggedIn = require("../middleware/isLoggedin.middleware")
const upload = require("../middleware/uploader.middleware")
const BannerController = require("../controllers/banner.controller");
const BannerCtrl = new BannerController();

app.post('/create', isLoggedIn, upload.array('image'), BannerCtrl.create);
app.get('/one', BannerCtrl.getOneBanner);
app.get('/', BannerCtrl.getAllBanner);
app.delete('/del/:id', isLoggedIn, BannerCtrl.deleteBanner);
app.get('/:id', BannerCtrl.getBannerById);
app.put('/edit/:id', isLoggedIn, upload.array('image'), BannerCtrl.editBanner);



module.exports = app;