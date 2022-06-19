const Category = require("../models/category.model");


class CategoryController {
    create(req, res, next) {
        let data = req.body;
        // console.log(data);
        const category = Category(data);
        category.save()
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Category has been created"
                })
            })
            .catch((err) => {
                res.json({
                    result: null,
                    status: false,
                    message: "Category could not created"
                })
            })
    }

    getAllCategory(req, res, next) {
        Category.find()
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Category has been fetched"
                })
            })
            .catch((err) => {
                res.json({
                    result: null,
                    status: false,
                    message: "Category can not be fetched"
                })
            })
    }

    deleteCategory(req, res, next) {
        let id = req.params.id;
        Category.findOneAndDelete(
            { _id: id }
        )
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Category has been deleted"
                })
            })
            .catch((err) => {
                res.json({
                    result: null,
                    status: false,
                    message: "Category Could not be deleted"
                })
            })
    }

    editCategory(req, res, next) {
        let data = req.body;
        let id = req.params.id;
        Category.updateOne(
            { _id: id },
            { $set: data }
        )
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Category has been edited"
                })
            })
            .catch((err) => {
                res.json({
                    result: null,
                    status: false,
                    message: "Category can not be edited"
                })
            })
    }

    getCategoryById(req, res){
        let id = req.params.id;
        Category.findOne(
            {_id : id}
        )
        .then((response)=> {
            res.json({
                result : response,
                status : true,
                message : "Category has been fetched"
            })
        })
        .catch((err)=> {
            res.json({
                result : null,
                status : false,
                message : "Category by id can not be fetched" 
            })

        })
    }


    getOne(req, res, next) {
        let random = 1;
        Category.aggregate([
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




}


module.exports = CategoryController;