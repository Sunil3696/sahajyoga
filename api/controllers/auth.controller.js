const User = require("../models/user.model");
const paswordHash = require("password-hash");
const jwt = require("jsonwebtoken");

function generateToken(usr) {
    const token = jwt.sign({
        email : usr.email,
        name : usr.name,
        status : usr.status,
        user_id : usr._id,
        roles : usr.roles
    }, "Balami")
    return token;
}
class authController {
    login(req, res, next) {
        console.log(req.body)
        User.findOne({
            email: req.body.email
        })
            .then(function (usr) {
                if (usr) {
                    let chkPwd = paswordHash.verify(req.body.password, usr.password);
                    if (chkPwd) {
                        if (usr.status == 'active') {
                            res.json({
                                result: usr,
                                status: true,
                                token: generateToken(usr),
                                message: "user has been logged in"
                            })
                        }
                    } else {
                        res.json({
                            result: null,
                            status: false,
                            message: "Please check you credentials"
                        })
                    }
                } else {
                    res.json({
                        status: false,
                        result: null,
                        message: "user Not Found"
                    })
                }
            })
    }


    register(req, res, next) {
        let data = req.body;
        data.password = paswordHash.generate(req.body.password);
        console.log(data)
        let user = new User(data);
        user.save()
            .then(function (response) {
                res.json({
                    status: true,
                    message: "User has been registered",
                    result: user
                })
            })
            .catch(function (error) {
                res.json({
                    status: false,
                    result: error,
                    message: "User Can not be registered"
                })
            })

    }
}


module.exports = authController;