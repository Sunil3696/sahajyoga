const express = require("express");

const app = express();
require("./db.init");
const cors = require("cors")
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(cors());

let path = process.cwd() + '/uploads';
app.use('/assets', express.static(path))

//importing routes
const authRoutes = require("./routes/auth.routes")
const bannerRoutes = require("./routes/banner.route");
const categoryRoutes = require("./routes/category.routes")
const sysRoutes = require("./routes/systems.routes");
const bioRoutes = require("./routes/biograpgy.routes")
const blogRoutes = require("./routes/blog.routes");
const TestionialRoutes = require("./routes/testimonial.routes");
const FeedbackRoutes = require("./routes/feedback.routes");

//mounting routes
app.use('/auth', authRoutes);
app.use('/banner', bannerRoutes);
app.use('/category', categoryRoutes);
app.use('/systems', sysRoutes);
app.use('/bio', bioRoutes);
app.use('/blog', blogRoutes);
app.use('/testimonials', TestionialRoutes);
app.use('/feedback', FeedbackRoutes);

app.use('/test', (req, res) => {
    res.json("Congratulations on deployement")
})



// app.listen(3003, "localhost", function (error, success) {
//     if (error) {
//         console.log("Server can not be started")
//     } else {
//         console.log("Server started at port 3003")
//     }
// })


// app.listen(process.env.PORT || 80);


app.listen(3003, "localhost", function (error, success) {
    if (error) {
        console.log("Server can not be started")
    } else {
        console.log("Server started at port 3003")
    }
})