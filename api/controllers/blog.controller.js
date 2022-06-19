const Blog = require("../models/blog.model");

class BlogController {
    create(req, res, next) {
        let author = req.user.user_id;
        let data = req.body;
        data.author = author;
        let ctnFiles = Object.keys(req.files).length !== 0;
        // console.log(author)
        if (ctnFiles) {

            let image = [];
            req.files.image.map(function (o) {
                image.push(o.filename);
            });
            data.image = image;

            let carousel = [];
            req.files.carousel.map(function (o) {
                carousel.push(o.filename);
            });
            data.carousel = carousel;
        }
        let blog = Blog(data);
        blog.save()
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Blog has been added"
                })
            })
            .catch((err) => {
                res.json({
                    result: err,
                    status: false,
                    message: "Blog could not be added"
                })
            })
    }
    deleteBlog(req, res) {
        let id = req.params.id;
        Blog.findOneAndDelete(
            { _id: id }
        )
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Blog has been deleted"
                })
            })
            .catch((err) => {
                res.json({
                    result: err,
                    status: false,
                    message: "Blog could not be deleted"
                })
            })
    }
    getBlogbyId(req, res) {
        let id = req.params.id;
        Blog.find(
            { _id: id }
        )
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Blog has been fetched"
                })

            })
            .catch((err) => {
                res.json({
                    result: err,
                    status: false,
                    message: "Blog could not be fetched"
                })
            })
    }
    getAllBlog(req, res) {
        Blog.find()
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "All Blogs has been fetched"
                })
            })
            .catch((err) => {
                res.json({
                    result: err,
                    status: false,
                    message: "All Blogs can not be fetch"
                })
            })

    }

    editBlog(req, res) {
        let id = req.params.id;
        let data = req.body;

        console.log(data)

        if (req.files.image) {
            let image = [];
            req.files.image.map((o) => {
                image.push(o.filename);
            });
            data.image = image;
        }
        else {
            data.image = req.body.image.split(',');
        }


        if (req.files.carousel) {
            let carousel = [];
            req.files.carousel.map((o) => {
                carousel.push(o.filename);
            })
            data.carousel = carousel;
        }
        else {
            data.carousel = req.body.carousel.split(',');
        }


        console.log(data);







        Blog.updateOne({ _id: id }, { $set: data })
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Blog has been updated"
                })
            })
            .catch((err) => {
                res.json({
                    result: err,
                    status: false,
                    message: "Blog couldnot be updated"
                })
            })
    }

    getBlogForFe(req, res) {
        Blog.aggregate([
            { $match : { status : "active"}},
            { $sample: { size: 3 } }
        ])
        .then((response)=> {
            res.json({
                result : response,
                status : true,
                message : "Blog for FE has been fetched"
            })
        })
        .catch((err)=> {
            res.json({
                result : err,
                status : false,
                message : "Blog for FE can not be fetched"
            })
        })
    }

    updateView(req, res){
        let count = req.body.views;
        Blog.update(
            {_id : req.params.id},
            { $set : { views : req.body.views }}
        )
        .then((response)=> {
            res.json({
                result : response,
                status : true,
                message : "View Updated"
            })
        })
        .catch((err)=> {
            res.json({
                result : err,
                status : false,
                message : "Could not Update"
            })
        })
    }


    getPopularBlogs(req,res ){
        Blog.find().sort({views : -1}).limit(2)
        .then((response)=> {
           res.json({
            result : response,
            status : true,
            message : "Popular Blogs has been fetched" 
           })
        })
        .catch((err)=> {
            res.json({
                result : err,
                status : false,
                message : "Popular Blogs can not be fetched" 
               })
        })
    }

    
}

module.exports = BlogController;


