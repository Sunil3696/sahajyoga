const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique : true
    },
    image: [{
        type: String,
        required: true,
    }],
    content: {
        type: String,
        required: true
        
    },
    carousel: [{
        type : String,
        default : null
    }],
    vid_url : {
        type : String,
        default : null
    },
    published_date : {
        type: String,
        default : null
    },
    status : {
        type : String,
        enum : ['active', 'unpublished', 'archived'],
        default : 'unpublished'
    },
    author : {
        type : mongoose.Types.ObjectId,
        ref : "User"
    }, 
    views : {
        type : Number,
        default : null
    },
    summary : {
        type: String
    }


}, {timestamps : true})

const BlogModel = mongoose.model("Blog", BlogSchema);
module.exports = BlogModel;