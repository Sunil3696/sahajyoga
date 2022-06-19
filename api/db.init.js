const mongoose = require("mongoose");
const dbURL = "mongodb://localhost:27017/sahajyoga";
// const dbURL = "mongodb+srv://sunil:B3ast0022@test.wfcubpx.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURL, function (err, succ) {
    if (err) {
        console.log("error in connecting to mongoose database", err)
    } else {
        console.log("Mongoose has been connected succesfully")
    }
})
