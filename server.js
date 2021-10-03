const logger = require("morgan");
const express = require("express");
const mongojs = require("mongojs");
const routes = require("./routes");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

// const databaseUrl = "warmup";
// const collections = ["books"];
// const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});