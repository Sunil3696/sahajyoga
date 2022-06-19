const mongoose = require("mongoose");

const SystemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    thumb_image: [{
        type: String,
        default: null
    }],
    banner_image: [{
        type: String,
        default: null
    }],
    top_desc: {
        type: String,
    },
    images: [{
        type: String,
        default: null
    }],   
    vid_url: {
        type: String,
        default: null
    },
    buttom_desc: {
        type: String,
    },
    under_head: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    }

}, { timestamps: true })

const SystemsModel = mongoose.model("System", SystemSchema);
module.exports = SystemsModel;
