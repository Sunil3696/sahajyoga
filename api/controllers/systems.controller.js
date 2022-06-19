const Systems = require("../models/system.model");

class SystemsController {
    create(req, res, next) {
        // res.json(req.files['thumb_image'][0].filename)
        // console.log(req.files['images'][0].filename)
        let data = req.body;
        console.log(req.files);
        if (req.files) {
            data.thumb_image = req.files['thumb_image'][0].filename;
            data.banner_image = req.files['banner_image'][0].filename;
            let images = [];
            req.files.images.map(function (o) {
                images.push(o.filename);
            });
            data.images = images;

        }
        console.log(data)
        const systems = Systems(data);
        systems.save()
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Systems has been added"
                })
            })
            .catch((err) => {
                res.json({
                    result: err,
                    status: false,
                    message: "Systems could not be added"
                })
            })
    }

    getSystemById(req, res, next) {
        let id = req.params.id;
        Systems.findOne(
            { _id: id }
        )
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Systems has been fetched"
                })
            })
            .catch((err) => {
                res.json({
                    result: null,
                    status: false,
                    message: "Systems can not be fetched"
                })
            })
    }

    deleteSystem(req, res, next) {
        let id = req.params.id;
        Systems.findOneAndDelete(
            { _id: id }
        )
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "System has been deleted"
                })
            })
            .catch((err) => {
                res.json({
                    result: null,
                    status: false,
                    message: "System can not be deleted"
                })
            })
    }

    editSystem(req, res, next) {
        let id = req.params.id;
        let data = req.body;

        if (req.files.thumb_image) {
            data.thumb_image = req.files['thumb_image'][0].filename;
        }

        if (req.files.banner_image) {
            data.banner_image = req.files['banner_image'][0].filename;
        }

        if (req.files.images) {
            let images = [];

            req.files.images.map((o) => {
                images.push(o.filename)
            });
            data.images = images;
        } else {
            data.images = req.body.images.split(',');
        }
        Systems.updateOne(
            { _id: id },
            { $set: data }
        )
            .then((response) => {
                res.json({
                    status: true,
                    result: response,
                    message: "System has been edited"
                });
            })
            .catch((error) => {
                res.json({
                    status: null,
                    result: error,
                    message: "System has been edited"
                });
            })

    }

    getAllSystem(req, res) {
        Systems.find()
            .populate('under_head')
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "System has been fetched"
                })
            })
            .catch((err) => {
                res.json({
                    result: err,
                    status: false,
                    message: "System can not fetched"
                })
            })
    }

    getAllSystemFe(req, res) {
        Systems.find()
            // .populate('under_head')
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "System has been fetched"
                })
            })
            .catch((err) => {
                res.json({
                    result: err,
                    status: false,
                    message: "System can not fetched"
                })
            })
    }



}

module.exports = SystemsController;