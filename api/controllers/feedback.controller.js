const Feedback = require("../models/feedback.model");


class FeedBackController {
    create(req, res) {
        let data = req.body;

        let feedback = new Feedback(data);

        feedback.save()
            .then((response) => {
                res.json({
                    result: response,
                    status: true,
                    message: "Thank you ! for your Feedback"
                })
            })
            .catch((err) => {
                res.json({
                    result: err,
                    status: false,
                    message: "Sorry! There was an error while sending feedback"
                })
            })

    }
}


module.exports = FeedBackController;