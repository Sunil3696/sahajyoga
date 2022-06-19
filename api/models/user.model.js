const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    status : {
        type  : String,
        enum : ['active', 'inactive'],
        default : "inactive"
    },
    roles: {
        type : String, 
        enum : ['admin', 'customer'],
        default : 'customer'
    }
}, {
    timestamps : true
})

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;