const jwt = require('jsonwebtoken')

const isLoggedIn = function (req, res, next) {
    let token = "";

    if (req.headers['authorization']) {
        token = req.headers['authorization'];
    }
    if (req.headers['x-access-token']) {
        token = req.headers['x-access-token'];
    }
    if (req.query.token) {
        token = req.query.token;
    }

    if (token == "") {
        res.json({
            result: null,
            message: "Unauthorized access",
            status: false
        })
    }
    else {
        const data = jwt.verify(token, "Balami");
        if (!data) {
            res.json({
                result: null,
                status: false,
                message: "Invalid token or token expired"
            })
        }
        else{
            req.user = data;
            // console.log("data", data);
            next();  //this passes req to another middleware registered on banner routes

        }
    }


}

module.exports = isLoggedIn;