const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv"); 
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8071;

app.use(cors());
app.use(bodyParser.json());


// connect to the database 
const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
//    useCreateIndex : true,
//    useNewUrlParser : true,
//    useUnifiedTopology : true,
//    useFindAndModify : false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection is successful!");
});

const productRouter = require("./routes/products.js");

app.use("/product", productRouter );

app.listen(PORT, () => {
    console.log( `Listening on port number : ${PORT} ...`);
});





