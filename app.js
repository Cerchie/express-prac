const express = require("express");
const ExpressError = require("./expressError");
const userRoutes = require("./routes")
const app = express();
const middleware = require("./middleware")
const morgan = require("morgan")

app.use(express.json());

app.use(morgan('dev'))
app.use('/users', userRoutes);

app.get('/favicon.ico', (req, res) => res.sendStatus(204))

app.get('/secret', middleware.checkForPassword, (req, res, next) => {
    return res.send("I LOVE YOU <3 FOR REAL MARRY ME")
});

app.get('/private', middleware.checkForPassword, (req, res, next) => {
    res.send("YOU HAVE REACHED THE PRIVATE PAGE IT IS PRIVATE")
});

app.use(function (req, res) {
    return new ExpressError("Not Found", 404)
});

app.use(function (err, req, res, next) {
    let status = err.status || 500;
    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    })
});



app.listen(3000, function () {
    console.log(`Server starting on port 3000`);
});