// Import packages
const express = require("express");
const logger = require("morgan");
const cors = require("cors");


// route import 
const indexRoute = require("./routes/home");


// create express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(logger('dev'));


// Routes register
app.use("/", indexRoute);
app.use("/api", indexRoute);



// connection
const port = process.env.PORT || 4000;

// 404 - not found
app.use((req, res, next) => {
    res.status(404);
    const error = new Error(`Not Found - ${req.originalUrl}`);
    next(error);
})

app.use((err, req, res, next) => {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
    });
})
app.listen(port, () => console.log(`Listening to port ${port}`));
