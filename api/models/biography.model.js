const mongoose = require("mongoose");

const BiographySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    short_summ: {
        type: String,
        required: true
    },
    brief_summ: {
        type: String,
        default: null
    },
    wiki_link: {
        type: String,
        default: "https://en.wikipedia.org/wiki/Nirmala_Srivastava",
    },
    main_images: [{
        type : String,
        default : null
    }],
    quotes : {
        type : String,
        default : null
    },
    desc_images : [{
        type : String,
        default : null
    }],
    status : {
        type : String,
        enum : ['active', 'inactive'],
        default : 'inactive'
    }


}, {timestamps : true})
const BiographyModel = mongoose.model("Biography", BiographySchema);
module.exports = BiographyModel;