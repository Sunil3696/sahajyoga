const Banner = require("../models/banner.model");

class BannerController {
    create(req, res, next) {
        let data = req.body
        // console.log("type", typeof(req.body))
        if (req.files) {
            let image = [];
            req.files.map(function (o) {
                image.push(o.filename);
            });
            data.image = image;
        }
        // console.log(data);
        const banner = new Banner(data);
        banner.save()
            .then((response) => {
                res.json({
                    status: true,
                    result: response,
                    message: "Banner has been Added"
                })
            })
            .catch((err) => {
                console.log('errr', err)
                res.json({
                    status: false,
                    result: null,
                    message: "Banner could not be added at this moment"
                })
            })
    }

    getAllBanner(req, res, next) {
        Banner.find()
            .then((response) => {
                res.json({
                    status: true,
                    result: response,
                    message: "Banner Has Been Fetched"
                })
            })
            .catch((err) => {
                res.json({
                    status: falase,
                    result: null,
                    message: "Banner can not be fetched"
                })
            })
    }

    deleteBanner(req, res, next) {
        let banner_id = req.params.id;
        // console.log("id", banner_id)
        Banner.find({
            _id: banner_id
        })
            .then((response) => {
                Banner.deleteOne(
                    { _id: banner_id }
                )
                    .then((resp) => {
                        res.json({
                            status: true,
                            result: resp,
                            message: "Banner has been deleted"
                        })
                    })
                    .catch((errs) => {
                        res.json({
                            status: false,
                            message: "Could not delete banner",
                            result: null
                        })
                    })
            })
            .catch((err) => {
                res.json({
                    status: false,
                    message: "Could not find banner info or Banner already deleted",
                    result: null
                })
            })

    }

    getBannerById(req, res, next) {
        let banner_id = req.params.id;
        Banner.findOne({ _id: banner_id })
            .then((response) => {
                res.json({
                    status: true,
                    result: response,
                    message: "Banner has been fetched"
                })
            })
            .catch((err) => {
                res.json({
                    status: false,
                    result: null,
                    message: "Banner can not be fetched"
                })
            })
    }

    editBanner(req, res, next) {
        let banner_id = req.params.id;
        let data = req.body;
        if (req.files.length) {
            let image = [];
            req.files.map(function (o) {
                image.push(o.filename);
            });
            data.image = image;
        }
        // console.log("da", data);

        Banner.updateOne(
            { _id: banner_id },
            { $set: data }
        )
            .then((response) => {
                res.json({
                    status: true,
                    result: response,
                    message: "Banner has been Updated"
                })
            })
            .catch((err) => {
                res.json({
                    status: false,
                    result: null,
                    message: "Banner couldn't be updated"
                })
            })
    }

    getOneBanner(req,res){
        Banner.aggregate([
            { $match : { status : "active"}},
            { $sample: { size: 1 } }
        ])
        .then((response)=> {
            res.json({
                result : response,
                status : true,
                message : "Banner for fe has been fetched"
            })
        })
        .catch((err)=> {
            res.json({
                result : err,
                status : false,
                message : "Banner for fe can not be  fetched"
            })
        })
    }

  


}

module.exports = BannerController;