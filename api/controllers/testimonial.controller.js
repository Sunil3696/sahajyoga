const Testimonial = require("../models/testimonial.model");


class TestimonialController {


    create(req, res, next) {
        let data = req.body;
        // console.log(data);

        if (req.files) {
            let image = [];
            req.files.map((o) => {
                image.push(o.filename);
            });
            data.image = image;
        }

        let testimonial = new Testimonial(data);

        testimonial.save()
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Testimonials has been added"
                })
            })
            .catch((err) => {
                res.json({
                    result: err,
                    status: false,
                    message: "Cound not add Testimonials"
                })
            })
    }

    getAllTestimonials(req, res) {
        Testimonial.find()
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Testimonials has been fetched"
                })
            })
            .catch((err) => {
                res.json({
                    result: err,
                    status: false,
                    message: "Cound not fetch Testimonials"
                })
            })

    }
    deleteTestimonial(req, res) {
        let id = req.params.id;

        Testimonial.deleteOne(
            { _id: id }
        )
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Testimonials has been deleted"
                })
            })
            .catch((err) => {
                res.json({
                    result: err,
                    status: false,
                    message: "Cound not delete Testimonials"
                })
            })

    }
    editTestimonials(req, res) {
        let id = req.params.id;
        let data = req.body;
        if (req.files.length) {
            let image = [];
            req.files.map((o) => {
                image.push(o.filename);
            })
            data.image = image;
        }


        Testimonial.updateOne(
            { _id: id },
            { $set: data }
        )

            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Testimonials has been updated"
                })
            })
            .catch((err) => {
                res.json({
                    result: err,
                    status: false,
                    message: "Cound not update Testimonials"
                })
            })
    }

    getTestimonialById(req, res) {
        let id = req.params.id;

        Testimonial.findOne(
            { _id: id }
        )
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Testimonials has been fetched"
                })
            })
            .catch((err) => {
                res.json({
                    result: err,
                    status: false,
                    message: "Cound not fetch Testimonials"
                })
            })
    }

}


module.exports = TestimonialController;