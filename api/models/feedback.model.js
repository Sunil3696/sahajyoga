const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
    email : {
        type : String,
    },
    message : {
        type : String,
    },
    reply : {
        type : String,
        default : null
    }
}, {
    timeseries : true
})


const FeedBackModel = mongoose.model('Feedback', FeedbackSchema);

module.exports = FeedBackModel;