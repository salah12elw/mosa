const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const Routes = require("./API/routes/routes");
// const Routes = require("./API/routes/routes");
// const { error } = require("console");
const app = express();
app.use(express.json());
app.use(cors());

const mongooseLink = "mongodb+srv://salahelw1020:1234567812345678@cluster0.zwyiitm.mongodb.net/"

mongoose.connect(mongooseLink)

mongoose.connection.on("connected", () => {
    console.log("mongo connected");
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error", err);
});


app.get('/app', (req, res) => {

    res.status(200).json({
        name: "salaheldin"
    })





    if (!firstName || !lastName) {
        res.status(305).json({
            error: true,
            errorMessage: "first name and last name are must",
        });

        return;
    }

    res.status(200).json({
        fullName: firstName + " " + lastName,
    });
});

app.post("/wahtsyourFullName", (req, res) => {
    const { name, dadName, lastName } = req.body;

    if (!name || !dadName || !lastName) {
        res.status(305).json({
            error: true,
            errorMessage: "name and dadName and last name are must",
        });

        return;
    }

    res.status(200).json({
        fullName: name + " " + dadName + " " + lastName,
    });
})

app.post("/countNams", (req, res) => {
    const { array } = req.body;
    res.status(200).json({
        array: array.length
    });
})

app.post("/login", (req, res) => {
    const { username, pasword } = req.body;
    res.status(200).json({
    });
})

// app.use(Routes)
app.use(Routes)

module.exports = app;
