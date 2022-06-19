const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    headings: {
        type: String,
        required: true
    },
    main_link: {
        type: String,
        required: true
    },
    sub_link: {
        type: String,
        required: true
    },
    status : {
        type : String,
        enum : ['active', 'inactive'],
        default : 'inactive'
    },
    image: [{
        type: String,
        default: null
    }]
}, {
    timestamps: true
})

const BannerModel = mongoose.model("Banner", BannerSchema);
module.exports = BannerModel;