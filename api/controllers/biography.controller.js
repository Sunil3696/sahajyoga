const Biography = require("../models/biography.model");

class BiographyController {
    create(req, res, next) {
        let data = req.body;
        if (req.files) {
            let main_images = [];
            req.files.main_images.map(function (o) {
                main_images.push(o.filename);
            });
            data.main_images = main_images;

            let desc_images = [];
            req.files.desc_images.map(function (o) {
                desc_images.push(o.filename);
            });
            data.desc_images = desc_images;
        }
        let biography = Biography(data);
        biography.save()
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Biography has been added"
                })
            })
            .catch((err) => {
                res.json({
                    result: err,
                    status: false,
                    message: "Biography has not been added"
                })
            })
    }

    getOneBio(req, res, next) {
        let random = 1;
        Biography.aggregate([
            { $sample: { size: 1 } }  //this will return random biography with limit 1
        ])
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "rand"
                })
            })
            .catch((err) => {
                res.json({
                    result: null,
                    status: false,
                    message: "rand"
                })
            })
    }

    getBioById(req, res, next) {
        let id = req.params.id
        Biography.findOne(
            { _id: id }
        )
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "rand"
                })
            })
            .catch((err) => {
                res.json({
                    result: null,
                    status: false,
                    message: "rand"
                })
            })
    }

    getAllBio(req, res, next) {
        Biography.find()
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Biographies has been fetched"
                })
            })
            .catch((err) => {
                res.json({
                    result: null,
                    status: false,
                    message: "Could not fetched data"
                })
            })
    }

    deleteBio(req, res, next) {
        let id = req.params.id;
        Biography.findOneAndDelete(
            { _id: id }
        )
            .then((response) => {
                if (response) {
                    res.json({
                        result: response,
                        status: true,
                        message: "Bio has been deleted"
                    })
                } else {
                    res.json({
                        result: null,
                        status: false,
                        message: "Bio could not be deleted"
                    })
                }
            })
            .catch((err) => {
                res.json({
                    result: null,
                    status: false,
                    message: "Bio could not be deleted"
                })
            })
    }

    editBio(req, res, next) {
        let id = req.params.id;
        let data = req.body;
        console.log(data);
        console.log(req.files.desc_images);
        // let ctnFiles = Object.keys(req.files).length;
        // if (ctnFiles > 0) {

        if (req.files.main_images) {
            let main_images = [];
            req.files.main_images.map(function (o) {
                main_images.push(o.filename);
            });
            data.main_images = main_images;
        }else{
            data.main_images = req.body.main_images.split(',');
        }

        if (req.files.desc_images) {
            let desc_images = [];
            req.files.desc_images.map(function (o) {
                desc_images.push(o.filename);
            });
            data.desc_images = desc_images;
        }else{
            data.desc_images = req.body.desc_images.split(',');

        }




        // }    

        Biography.updateOne(
            { _id: id },
            { $set: data }
        )
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Bio has been Updated"
                })
            })
            .catch((err) => {
                res.json({
                    result: null,
                    status: false,
                    message: "Bio can not be  updated"
                })
            })
    }
}

module.exports = BiographyController;