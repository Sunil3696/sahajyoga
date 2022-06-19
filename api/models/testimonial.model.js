const { default: mongoose } = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
   
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    image : [{
        type : String,
        default : null
    }],
    owner : {
        type : String,
        required : true
    },
    post   : {
        type : String,
        default : null
    },
    address : {
        type : String, 
        required : true
    },
    status : {
        type : String,
        enum : ['active', 'inactive'],
        default : 'inactive'
    }
}, {
    timestamps : true
})

const TestimonialModel = mongoose.model( 'Testimonial', TestimonialSchema);

module.exports = TestimonialModel;
